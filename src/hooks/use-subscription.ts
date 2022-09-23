import React from "react";
import emitter from "@/services/emitter";
import { Subscription } from "@/types";

export default function useSubscription(
  subscription: Subscription,
  fn: (...args: any[]) => void
) {
  const fnRef = React.useRef(fn);

  React.useMemo(() => {
    fnRef.current = fn;
  }, [fn]);

  React.useEffect(() => {
    emitter.on(subscription, fnRef.current);
    return () => {
      emitter.off(subscription, fnRef.current);
    };
  }, [subscription]);
}
