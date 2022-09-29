import React from "react";
import { useGLTF } from "@react-three/drei";
import { ModelComponent as ModelComponentType } from "@/types";
import { a, useSpring } from "@react-spring/three";
import Hotspot from "@/components/hotspot/hotspot";

type Props = {
  modelId: string;
  path: string;
  component: ModelComponentType;
  open?: boolean;
  showHotspot?: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function ModelComponent({
  modelId,
  path,
  component,
  open = true,
  showHotspot = true,
  onOpen,
  onClose,
}: Props) {
  const model = useGLTF(path);

  const props = useSpring({
    position: open ? component.openPosition : component.position,
  });

  return (
    <a.group position={props.position}>
      <group scale={component.scale}>
        <primitive object={model.scene} />
        {showHotspot && (
          <Hotspot
            modelId={modelId}
            componentId={component.id}
            title={open ? "MORE INFO" : component.title}
            info={{
              title: component.title,
              description: component.hotspot.description,
            }}
            position={
              open ? component.hotspot.openPosition : component.hotspot.position
            }
            flipped={component.hotspot.flipped}
            onOpen={onOpen}
            onClose={onClose}
          />
        )}
      </group>
    </a.group>
  );
}
