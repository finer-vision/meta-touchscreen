import React from "react";
import { useGLTF } from "@react-three/drei";
import { ModelComponent as ModelComponentType } from "@/types";
import { a, useSpring } from "@react-spring/three";
import Hotspot from "@/components/hotspot/hotspot";

type Props = {
  path: string;
  component: ModelComponentType;
  open?: boolean;
  showHotspot?: boolean;
  onClick?: () => void;
};

export default function ModelComponent({
  path,
  component,
  open = true,
  showHotspot = true,
  onClick,
}: Props) {
  const model = useGLTF(path);

  const props = useSpring({
    position: open ? component.openPosition : component.position,
  });

  return (
    <a.group {...props}>
      <group scale={component.scale}>
        <primitive object={model.scene} />
        {showHotspot && (
          <Hotspot
            title={component.title}
            position={
              open ? component.hotspot.openPosition : component.hotspot.position
            }
            flipped={component.hotspot.flipped}
            onClick={(event) => {
              event.stopPropagation();
              if (onClick) onClick();
            }}
          />
        )}
      </group>
    </a.group>
  );
}
