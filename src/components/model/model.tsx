import React from "react";
import * as THREE from "three";
import { Environment, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useSubscription from "@/hooks/use-subscription";
import { Subscription } from "@/types";
import Hotspot from "@/components/hotspot/hotspot";
import emitter from "@/services/emitter";
import { appState } from "@/state/app-state";

export default function Model() {
  const selectedModel = appState((state) => state.selectedModel);
  const models = useGLTF([
    `./assets/models/${selectedModel.model.id}/${selectedModel.model.id}.glb`,
    ...selectedModel.model.components.map((component) => {
      return `./assets/models/${selectedModel.model.id}/${component.id}.glb`;
    }),
  ]);
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
        <group position={selectedModel.model.position}>
          <primitive
            object={models[0].scene}
            scale={selectedModel.model.scale}
          />
        </group>
        {selectedModel.model.components.map((component, index) => {
          return (
            <group key={index} position={component.position}>
              <primitive
                object={models[index + 1].scene}
                scale={component.scale ?? selectedModel.model.scale}
              />
              <Hotspot
                key={index}
                title={component.title}
                position={component.hotspot.position}
                flipped={component.hotspot.flipped}
                onClick={() => {
                  emitter.emit(Subscription.openHotspot, component.id);
                }}
              />
            </group>
          );
        })}
      </mesh>
    </group>
  );
}
