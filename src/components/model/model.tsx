import React from "react";
import * as THREE from "three";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useSubscription from "@/hooks/use-subscription";
import { Subscription } from "@/types";
import Hotspot from "@/components/hotspot/hotspot";
import emitter from "@/services/emitter";
import { appState } from "@/state/app-state";

export default function Model() {
  const modelId = appState((state) => state.modelId);
  const gltf = useGLTF(`./assets/models/${modelId}.glb`);
  const ref = React.useRef<THREE.Group>();
  const [rotate, setRotate] = React.useState(false);
  useSubscription(Subscription.rotate, () => {
    setRotate(true);
  });

  useSubscription(Subscription.stopRotate, () => {
    setRotate(false);
  });

  useSubscription(Subscription.reset, () => {
    ref.current.rotation.y = 0;
  });

  useFrame(() => {
    if (rotate) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={ref}>
      <mesh scale={1.5}>
        <Environment background={false} files="./assets/environment.hdr" />
        <primitive object={gltf.scene} position-y={-1.7} scale={1.4} />
        <Hotspot
          title="BATTERY BACKUP"
          position={[-0.3, 1, 0.8]}
          onClick={() => {
            emitter.emit(Subscription.openHotspot);
          }}
        />
        <Hotspot
          title="POWER SHELF"
          position={[-0, -0.3, 0.8]}
          onClick={() => {
            emitter.emit(Subscription.openHotspot);
          }}
        />
        <ambientLight />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.75}
        />
      </mesh>
    </group>
  );
}
