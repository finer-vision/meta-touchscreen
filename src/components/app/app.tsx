import React from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { OrbitControls as OrbitControlsType } from "three-stdlib";
import { Canvas } from "@react-three/fiber";
import Model from "@/components/model/model";
import Homepage from "@/pages/home-page/home-page";
import models from "@/config/models";
import useSubscription from "@/hooks/use-subscription";
import { Subscription } from "@/types";
import { appState } from "@/state/app-state";
import ModelInfo from "../model-info/model-info";
import { Logo } from "@/pages/home-page/home-page.style";
import Screensaver from "@/components/screensaver/screensaver";
import Lights from "@/components/lights/lights";

export default function App() {
  React.useEffect(() => {
    function onContextMenu(event: MouseEvent) {
      event.preventDefault();
    }

    document.addEventListener("contextmenu", onContextMenu);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  const controlsRef = React.useRef<OrbitControlsType>(null);

  const [mounted, setMounted] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [minDistance, setMinDistance] = React.useState(1);
  const [maxDistance, setMaxDistance] = React.useState(3);

  React.useEffect(() => {
    // Preload assets
    const modelPaths = models
      .map((model) => {
        return [
          `./assets/models/${model.id}/${model.id}.glb`,
          ...model.components.map((component) => {
            return `./assets/models/${model.id}/${component.id}.glb`;
          }),
        ];
      })
      .flat();
    useGLTF.preload("./assets/hotspot.glb");
    const pending: Promise<void>[] = [];
    for (const modelPath of modelPaths) {
      pending.push(
        fetch(modelPath)
          .then((res) => res.blob())
          .then((blob) => {
            const url = URL.createObjectURL(blob);
            models.forEach((model) => {
              if (model.path === modelPath) {
                model.path = url;
              }
              model.components.forEach((component) => {
                if (component.path === modelPath) {
                  component.path = url;
                }
              });
            });
            useGLTF.preload(url);
          })
          .catch((err) => console.error(err))
      );
    }
    Promise.all(pending).finally(() => {
      setLoaded(true);
    });
  }, []);

  React.useEffect(() => {
    if (!loaded) return;
    if (!mounted) {
      setMounted(true);
      return;
    }
    const controls = controlsRef.current;
    if (controls === null) return;
    controls.saveState();
  }, [mounted, loaded]);

  const onReset = React.useCallback(() => {
    const controls = controlsRef.current;
    if (controls === null) return;
    controls.reset();
    controls.enableDamping = false;
    controls.reset();
    controls.enableDamping = true;
    controls.reset();
  }, []);

  const selectedModel = appState((state) => state.selectedModel);
  const modelInfo = appState((state) => state.modelInfo);

  useSubscription(Subscription.reset, onReset);

  React.useEffect(() => {
    useSubscription.emit(Subscription.reset);
  }, [selectedModel.id]);

  const logoRef = React.useRef<HTMLVideoElement>(null);

  // Loop logo video every 10 seconds
  React.useEffect(() => {
    const logo = logoRef.current;
    const interval = setInterval(() => {
      if (logo === null) return;
      logo.play().catch((err) => {
        console.error(err);
      });
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  React.useEffect(() => {
    appState.getState().setSelectedModelComponent(null);
    appState.getState().setModelInfo(null);
    setMinDistance(selectedModel?.minDistance ?? 1);
    setMaxDistance(selectedModel?.maxDistance ?? 3);
  }, [selectedModel.id]);

  const showScreensaver = appState((state) => state.showScreensaver);
  const setShowScreensaver = appState((state) => state.setShowScreensaver);

  React.useEffect(() => {
    if (showScreensaver) {
      function onPointerDown() {
        setShowScreensaver(false);
      }

      window.addEventListener("pointerdown", onPointerDown);
      return () => {
        window.removeEventListener("pointerdown", onPointerDown);
      };
    }

    let timeout: NodeJS.Timeout;

    function resetScreensaverTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowScreensaver(true);
      }, 60000);
    }

    resetScreensaverTimeout();
    window.addEventListener("pointerdown", resetScreensaverTimeout);
    window.addEventListener("pointermove", resetScreensaverTimeout);
    window.addEventListener("pointerup", resetScreensaverTimeout);
    window.addEventListener("pointercancel", resetScreensaverTimeout);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("pointerdown", resetScreensaverTimeout);
      window.removeEventListener("pointermove", resetScreensaverTimeout);
      window.removeEventListener("pointerup", resetScreensaverTimeout);
      window.removeEventListener("pointercancel", resetScreensaverTimeout);
    };
  }, [showScreensaver]);

  React.useLayoutEffect(() => {
    if (showScreensaver) {
      appState.getState().setSelectedModel(models[0]);
      appState.getState().setSelectedModelComponent(null);
      appState.getState().setModelInfo(null);
      useSubscription.emit(Subscription.reset);
      useSubscription.emit(Subscription.rotate);
    } else {
      useSubscription.emit(Subscription.stopRotate);
      useSubscription.emit(Subscription.reset);
    }
  }, [showScreensaver]);

  if (!loaded) return null;

  return (
    <React.Fragment>
      <Logo>
        <video ref={logoRef} src="./assets/logo.webm" muted autoPlay />
        <span>Meta</span>
      </Logo>
      <ModelInfo
        show={modelInfo}
        title={modelInfo?.title}
        description={modelInfo?.description}
        onClose={() => {
          appState.getState().setModelInfo(null);
          useSubscription.emit(Subscription.closeHotspot);
        }}
      />
      <Canvas
        legacy
        flat
        linear
        dpr={1}
        gl={{ alpha: true, physicallyCorrectLights: true }}
      >
        <Lights />
        <OrbitControls
          ref={controlsRef}
          // enablePan={false}
          // enableZoom={false}
          minDistance={minDistance}
          maxDistance={maxDistance}
          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.75}
        />
        <React.Suspense fallback={<></>}>
          <Model key={selectedModel.id} />
        </React.Suspense>
      </Canvas>
      <Homepage />
      {showScreensaver && <Screensaver />}
    </React.Fragment>
  );
}
