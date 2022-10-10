import React from "react";
import { useGLTF } from "@react-three/drei";
import { ModelComponent as ModelComponentType } from "@/types";
import { a, useSpring } from "@react-spring/three";
import Hotspot from "@/components/hotspot/hotspot";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { appState } from "@/state/app-state";

type Props = {
  modelId: string;
  path: string;
  component: ModelComponentType;
  open?: boolean;
  showHotspot?: boolean;
};

export default function ModelComponent({
  modelId,
  path,
  component,
  open = true,
  showHotspot = true,
}: Props) {
  const model = useGLTF(path);

  const props = useSpring({
    position: open ? component.openPosition : component.position,
  });

  const selectedModelComponent = appState(
    (state) => state.selectedModelComponent
  );

  React.useEffect(() => {
    model.scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      if (!(object.material instanceof THREE.Material)) return;
      object.material.transparent = true;
      object.material.opacity = 0;
      object.material.needsUpdate = true;
    });
  }, []);

  useFrame(() => {
    const speed = 0.01;
    model.scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      if (!(object.material instanceof THREE.Material)) return;
      object.material.transparent = true;
      let opacityEnd = 1;
      if (
        selectedModelComponent !== null &&
        selectedModelComponent.id !== component.id
      ) {
        opacityEnd = 0.6;
      }
      object.material.opacity = THREE.MathUtils.lerp(
        object.material.opacity,
        opacityEnd,
        speed
      );
      object.material.needsUpdate = true;
    });
  });

  return (
    <a.group position={props.position}>
      <group scale={component.scale}>
        <primitive object={model.scene} />
        <Hotspot
          show={showHotspot}
          modelId={modelId}
          modelComponent={component}
          title={open ? "MORE INFO" : component.title}
          info={{
            title: component.title,
            description: component.hotspot.description,
          }}
          position={
            open ? component.hotspot.openPosition : component.hotspot.position
          }
          flipped={component.hotspot.flipped}
        />
      </group>
    </a.group>
  );
}
