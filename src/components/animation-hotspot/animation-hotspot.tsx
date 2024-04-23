import React from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { Text, useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { Vector } from "@/types";

type GLTFResult = GLTF & {
  nodes: {
    Hotspot_Surround_03001: THREE.Mesh;
    Hotspot_Surround_01: THREE.Mesh;
    Curve: THREE.Mesh;
    Curve_1: THREE.Mesh;
  };
  materials: {
    ["Brushed Steel"]: THREE.MeshStandardMaterial;
    ["Hotspot_Pill Orange"]: THREE.MeshStandardMaterial;
    ["Hotspot_Pill White"]: THREE.MeshStandardMaterial;
  };
};

type Props = Omit<GroupProps, "position" | "scale"> & {
  title: string;
  scale?: number;
  padding?: number;
  flipped?: boolean;
  position?: Vector;
  rotation?: Vector;
  onClick: () => void;
};

export default function AnimationHotspot({
  title,
  scale = 1,
  padding = 0.1,
  flipped = false,
  position,
  rotation,
  onClick,
  ...props
}: Props) {
  const { nodes } = useGLTF("./assets/hotspot.glb") as GLTFResult;

  const [width, setWidth] = React.useState(1);

  const x2 = React.useMemo(() => {
    return nodes.Hotspot_Surround_01.geometry.boundingBox.max.x * -0.5;
  }, [nodes.Hotspot_Surround_01]);

  const pillGroupRef = React.useRef<THREE.Group>(null);

  useFrame(() => {
    const pillGroup = pillGroupRef.current;
    if (pillGroup === null) return;
    const speed = 0.3;
    pillGroup.rotation.y = THREE.MathUtils.degToRad(Date.now() * speed);
  });

  const labelPosition = React.useMemo<[x: number, y: number, z: number]>(() => {
    return [padding / 2 + width / 2 + x2 - 0.069 / 2, 0, 0];
  }, [width, x2]);

  const groupProps = useSpring({
    position: position,
  });

  const handleClick = React.useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      onClick();
    },
    [onClick]
  );

  return (
    <group scale={scale}>
      <group rotation={rotation}>
        <a.group {...props} {...groupProps} onClick={handleClick}>
          <group scale={0.4}>
            <group scale-x={flipped ? -1 : 1}>
              <group position={[0.67, 0, 0]}>
                <mesh geometry={nodes.Hotspot_Surround_01.geometry}>
                  <meshBasicMaterial color="#35373e" />
                </mesh>
                <mesh
                  position-x={width + padding}
                  geometry={nodes.Hotspot_Surround_03001.geometry}
                >
                  <meshBasicMaterial color="#35373e" />
                </mesh>
              </group>
              <group position={labelPosition}>
                <mesh>
                  <boxGeometry args={[width + padding, 0.395, 0.057]} />
                  <meshBasicMaterial color="#35373e" />
                </mesh>
                <Text
                  scale-x={flipped ? -1 : 1}
                  position-x={0.025}
                  position-z={0.057 + 0.0001}
                  fontSize={0.395 / 2}
                  onAfterRender={(renderer, scene, camera, geometry) => {
                    const nextWidth = Math.abs(geometry.boundingBox.max.x * 2);
                    if (nextWidth === Infinity) return;
                    if (nextWidth !== width) {
                      setWidth(nextWidth);
                    }
                  }}
                >
                  {title}
                </Text>
              </group>
              <group ref={pillGroupRef}>
                <mesh geometry={nodes.Curve.geometry}>
                  <meshBasicMaterial color="#3A82EC" />
                </mesh>
                <mesh geometry={nodes.Curve_1.geometry}>
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              </group>
            </group>
          </group>
        </a.group>
      </group>
    </group>
  );
}
