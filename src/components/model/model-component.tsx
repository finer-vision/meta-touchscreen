import React from "react";
import { useGLTF } from "@react-three/drei";
import { ModelComponent as ModelComponentType } from "@/types";
import { a, useSpring } from "@react-spring/three";
import Hotspot from "@/components/hotspot/hotspot";
import * as THREE from "three";

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

  React.useMemo(() => {
    model.scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      if (!(object.material instanceof THREE.Material)) return;
      object.material = new THREE.MeshPhysicalMaterial(object.material);
      const alpha = [
        "BLMTCH_Vents",
        "Grand Teton Chasis_Vents",
        "Grand Teton Chasis_Vents.001",
        "Vents",
        "MiniPK front_Vents",
        "WDG400C_Vents",
        "Arrowhead Vents.001",
        "Arrowhead Vents",
        "Storm Point_Vents",
        "Cascade Creek Text ",
        "Storm Point_Vents",
        "Discovery Point_Vents",
        "Rubber Hose Textured",
        "Glacier Point_Vents",
      ].includes(object.material.name);
      object.material.transparent = alpha;
      object.material.alphaToCoverage = alpha;
      object.material.needsUpdate = true;
    });
  }, [model.scene]);

  return (
    <a.group position={props.position}>
      <group scale={component.scale}>
        <primitive object={model.scene} />
        {(component.hotspots ?? []).map((hotspot, index) => {
          return (
            <group scale={0.7} key={index}>
              <Hotspot
                show={showHotspot}
                modelId={modelId}
                modelComponent={component}
                title={open ? "MORE INFO" : component.title}
                info={{
                  title: component.title,
                  description: hotspot.description,
                }}
                scale={hotspot.scale}
                position={open ? hotspot.openPosition : hotspot.position}
                rotation={hotspot.rotation}
                flipped={hotspot.flipped}
              />
            </group>
          );
        })}
      </group>
    </a.group>
  );
}
