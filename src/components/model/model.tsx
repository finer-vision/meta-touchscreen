import React from "react";
import * as THREE from "three";
import { Environment, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useSubscription from "@/hooks/use-subscription";
import { ModelComponent as ModelComponentType, Subscription } from "@/types";
import { a, useSpring } from "@react-spring/three";
import { appState } from "@/state/app-state";
import ModelComponent from "@/components/model/model-component";

export default function Model() {
  const selectedModel = appState((state) => state.selectedModel);
  const modelGltfs = useGLTF([
    `./assets/models/${selectedModel.model.id}/${selectedModel.model.id}.glb`,
    ...selectedModel.model.components.map((component) => {
      return `./assets/models/${selectedModel.model.id}/${component.id}.glb`;
    }),
  ]);
  const ref = React.useRef<THREE.Group>();
  const [rotate, setRotate] = React.useState(false);
  const [openModelComponent, setOpenModelComponent] =
    React.useState<ModelComponentType>(null);

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
      openModelComponent !== null
        ? selectedModel.model.componentOpenPosition
        : selectedModel.model.position,
  });

  return (
    <group ref={ref}>
      <mesh scale={1.5}>
        <Environment background={false} files="./assets/environment.hdr" />
        <a.group {...props}>
          <group scale={selectedModel.model.scale}>
            <primitive object={modelGltfs[0].scene} />
            {selectedModel.model.components.map((component, index) => {
              return (
                <ModelComponent
                  key={index}
                  component={component}
                  path={`./assets/models/${selectedModel.model.id}/${component.id}.glb`}
                  open={
                    openModelComponent === null ||
                    openModelComponent?.id === component.id
                  }
                  onClick={() => {
                    setOpenModelComponent((openModelComponent) => {
                      if (openModelComponent !== null) return null;
                      return component;
                    });
                  }}
                />
              );
            })}
          </group>
        </a.group>
      </mesh>
    </group>
  );
}
