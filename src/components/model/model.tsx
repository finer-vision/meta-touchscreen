import React from "react";
import * as THREE from "three";
import { Environment, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useSubscription from "@/hooks/use-subscription";
import { Subscription } from "@/types";
import { a, useSpring } from "@react-spring/three";
import { appState } from "@/state/app-state";
import ModelComponent from "@/components/model/model-component";

export default function Model() {
  const selectedModel = appState((state) => state.selectedModel);
  const selectedModelComponent = appState(
    (state) => state.selectedModelComponent
  );
  const modelGltfs = useGLTF([
    `./assets/models/${selectedModel.id}/${selectedModel.id}.glb`,
    ...selectedModel.components.map((component) => {
      return `./assets/models/${selectedModel.id}/${component.id}.glb`;
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

  const props = useSpring({
    position:
      selectedModelComponent !== null
        ? selectedModel.componentOpenPosition
        : selectedModel.position,
  });

  return (
    <group ref={ref}>
      <mesh scale={1.5}>
        <Environment background={false} files="./assets/environment.hdr" />
        <a.group {...props}>
          <group scale={selectedModel.scale}>
            <primitive object={modelGltfs[0].scene} />
            {selectedModel.components.map((component, index) => {
              return (
                <ModelComponent
                  key={index}
                  modelId={selectedModel.id}
                  component={component}
                  path={`./assets/models/${selectedModel.id}/${component.id}.glb`}
                  open={selectedModelComponent?.id === component.id}
                  showHotspot={
                    selectedModelComponent === null ||
                    selectedModelComponent?.id === component.id
                  }
                />
              );
            })}
          </group>
        </a.group>
      </mesh>
    </group>
  );
}
