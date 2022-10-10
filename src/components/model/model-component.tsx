import React from "react";
import { useGLTF } from "@react-three/drei";
import { ModelComponent as ModelComponentType } from "@/types";
import { a, useSpring } from "@react-spring/three";
import Hotspot from "@/components/hotspot/hotspot";

type Props = {
  modelId: string;
  component: ModelComponentType;
  open?: boolean;
  showHotspot?: boolean;
};

export default function ModelComponent({
  modelId,
  component,
  open = true,
  showHotspot = true,
}: Props) {
  const model = useGLTF(component.path);

  const props = useSpring({
    position: open ? component.openPosition : component.position,
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
