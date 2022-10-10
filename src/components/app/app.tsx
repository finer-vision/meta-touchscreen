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
useGLTF.preload(modelPaths);
useGLTF.preload("./assets/hotspot.glb");

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

  React.useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    const controls = controlsRef.current;
    if (controls === null) return;
    controls.saveState();
  }, [mounted]);

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
  }, [selectedModel.id]);

  const [showScreensaver, setShowScreensaver] = React.useState(false);

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

  React.useEffect(() => {
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

  return (
    <React.Fragment key={selectedModel.id}>
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
      <Canvas legacy flat linear dpr={1} gl={{ alpha: true }}>
        <Model key={selectedModel.id} />
        <ambientLight />
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          // enableZoom={false}
          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.75}
        />
      </Canvas>
      <Homepage />
      {showScreensaver && <Screensaver />}
    </React.Fragment>
  );
}
