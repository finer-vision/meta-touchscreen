import React from "react";
import { get, update } from "idb-keyval";

type Timestamp = ReturnType<typeof generateTimestamp>;

type Session = {
  uuid: ReturnType<typeof generateUuid>;
  startedAt: Timestamp;
  endedAt?: Timestamp;
  pages: Array<{
    pathname: string;
    start: Timestamp;
    end?: Timestamp;
  }>;
  data?: any;
};

type SavedSession = Session & {
  syncingWithServer: boolean;
  syncedToServer: boolean;
};

type SessionContextType = {
  currentSession: Session | null;
  server: string;
  storageKey: string;
  deviceId: string;
  projectId: string;
  initialized: boolean;
  saveSession: (session: Session) => void;
  updateSession: (session: Session) => void;
};

function generateUuid() {
  return crypto.randomUUID();
}

function generateTimestamp(date: Date) {
  const offset = date.getTimezoneOffset() * 60 * 1000;
  const utcDate = new Date(date.getTime() - offset);
  let [dateString, timeString] = utcDate.toISOString().split("T");
  timeString = timeString.split(".")[0];
  return `${dateString} ${timeString}`;
}

const SessionContext = React.createContext<SessionContextType>({
  currentSession: null,
  server: "https://analytics-server.finervision.com",
  storageKey: "analytics",
  deviceId: "generic",
  projectId: "generic",
  initialized: false,
  saveSession() {},
  updateSession() {},
});

export function useSession() {
  const context = React.useContext(SessionContext);
  return React.useMemo(() => {
    function endLastPage(timestamp: Timestamp) {
      if (context.currentSession === null) return;
      const lastPage = context.currentSession.pages[context.currentSession.pages.length - 1];
      if (lastPage !== undefined && lastPage.end === undefined) {
        lastPage.end = timestamp;
      }
    }

    function end(timestamp: Timestamp) {
      if (context.currentSession === null) return;
      endLastPage(timestamp);
      context.currentSession.endedAt = timestamp;
      context.updateSession({ ...context.currentSession });
    }

    return {
      start(pathname?: Session["pages"][number]["pathname"]) {
        const timestamp = generateTimestamp(new Date());
        end(timestamp);
        context.currentSession = {
          uuid: generateUuid(),
          startedAt: timestamp,
          pages: [],
        };
        if (pathname !== undefined) {
          context.currentSession.pages.push({
            pathname,
            start: timestamp,
          });
        }
        context.saveSession({ ...context.currentSession });
      },
      updateData(fn: (data: Session["data"]) => Session["data"]) {
        if (context.currentSession === null) return;
        context.currentSession.data = fn(context.currentSession.data);
        context.updateSession({ ...context.currentSession });
      },
      visitPage(pathname: Session["pages"][number]["pathname"]) {
        if (context.currentSession === null) return;
        const timestamp = generateTimestamp(new Date());
        endLastPage(timestamp);
        context.currentSession.pages.push({ pathname: pathname, start: timestamp });
        context.updateSession({ ...context.currentSession });
      },
      end() {
        end(generateTimestamp(new Date()));
      },
    };
  }, [context]);
}

type Props = {
  children?: React.ReactNode;
  server: SessionContextType["server"];
  storageKey: SessionContextType["storageKey"];
  deviceId?: SessionContextType["deviceId"];
  projectId: SessionContextType["projectId"];
};

export function SessionProvider(props: Props) {
  const [initialized, setInitialized] = React.useState(false);
  const context = React.useMemo<SessionContextType>(() => {
    return {
      currentSession: null,
      server: props.server,
      storageKey: props.storageKey,
      deviceId: props.deviceId ?? "generic",
      projectId: props.projectId,
      initialized,
      saveSession(session) {
        update<SavedSession[]>(props.storageKey, (sessions = []) => {
          return [...sessions, { ...session, syncingWithServer: false, syncedToServer: false }];
        }).catch(console.error);
      },
      updateSession(session) {
        update<SavedSession[]>(props.storageKey, (sessions = []) => {
          return sessions.map((savedSession) => {
            return savedSession.uuid === session.uuid ? { ...savedSession, ...session } : savedSession;
          });
        }).catch(console.error);
      },
    };
  }, [props.server, props.deviceId, props.projectId, initialized]);
  const contextRef = React.useRef(context);
  React.useMemo(() => {
    contextRef.current = context;
  }, [context]);
  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    async function sync() {
      clearTimeout(timeout);
      try {
        const sessionsToSync = ((await get<SavedSession[]>(contextRef.current.storageKey)) ?? []).filter((session) => {
          return !session.syncingWithServer && !session.syncedToServer && session.endedAt !== undefined;
        });
        if (sessionsToSync.length === 0) return;
        const sessionsToSyncUuids = sessionsToSync.map((session) => {
          return session.uuid;
        });
        await update<SavedSession[]>(contextRef.current.storageKey, (sessions = []) => {
          return sessions.map((session) => {
            if (sessionsToSyncUuids.includes(session.uuid)) {
              session.syncingWithServer = true;
            }
            return session;
          });
        });
        const res = await fetch(contextRef.current.server, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            deviceId: contextRef.current.deviceId,
            projectId: contextRef.current.projectId,
            sessions: sessionsToSync.map((session) => {
              const { syncingWithServer, syncedToServer, ...props } = session;
              return props;
            }),
          }),
        });
        const synced = res.ok;
        await update<SavedSession[]>(contextRef.current.storageKey, (sessions = []) => {
          return sessions.map((session) => {
            if (sessionsToSyncUuids.includes(session.uuid)) {
              session.syncingWithServer = false;
              session.syncedToServer = synced;
            }
            return session;
          });
        });
      } catch (err) {
        console.error(err);
      } finally {
        timeout = setTimeout(sync, 1000);
      }
    }

    update<SavedSession[]>(contextRef.current.storageKey, (sessions = []) => {
      const timestamp = generateTimestamp(new Date());
      return sessions.map((session) => {
        if (session.endedAt === undefined) {
          session.endedAt = timestamp;
        }
        const lastPage = session.pages[session.pages.length - 1];
        if (lastPage !== undefined && lastPage.end === undefined) {
          lastPage.end = timestamp;
        }
        session.syncingWithServer = false;
        return session;
      });
    })
      .catch(console.error)
      .finally(() => {
        setInitialized(true);
        return sync();
      });
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  React.useEffect(() => {
    function onBeforeUnload() {
      if (contextRef.current.currentSession === null) return;
      const timestamp = generateTimestamp(new Date());
      if (contextRef.current.currentSession.endedAt === undefined) {
        contextRef.current.currentSession.endedAt = timestamp;
      }
      contextRef.current.updateSession({ ...contextRef.current.currentSession });
    }

    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);
  return (
    <SessionContext.Provider value={context}>
      <>{props.children}</>
    </SessionContext.Provider>
  );
}
