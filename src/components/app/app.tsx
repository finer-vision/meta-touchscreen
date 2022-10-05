import React, { useState } from "react";
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
import { AnimatePresence } from "framer-motion";

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

  return (
    <React.Fragment key={selectedModel.id}>
      <Canvas legacy flat linear dpr={1} gl={{ alpha: true }}>
        <Model key={selectedModel.id} />
        <ambientLight />
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.75}
        />
      </Canvas>
      <Homepage />
        <ModelInfo
          show={modelInfo}
          title={modelInfo?.title}
          description={modelInfo?.description}
          onClose={() => {
            appState.getState().setModelInfo(null);
          }}
        />
    </React.Fragment>
  );
}
