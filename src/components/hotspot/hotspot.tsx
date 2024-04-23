import React from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { Text, useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { ModelComponent, Subscription, Vector } from "@/types";
import { appState } from "@/state/app-state";
import useSubscription from "@/hooks/use-subscription";

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
  show?: boolean;
  modelId: string;
  modelComponent: ModelComponent;
  title: string;
  info: {
    title: string;
    description: string;
  };
  padding?: number;
  flipped?: boolean;
  position?: Vector;
  rotation?: Vector;
  scale?: number;
};

enum Step {
  initial = "initial",
  open = "open",
  info = "info",
}

export default function Hotspot({
  show = true,
  modelId,
  modelComponent,
  title,
  info,
  padding = 0.1,
  flipped = false,
  position,
  rotation,
  scale = 1,
  ...props
}: Props) {
  const { nodes } = useGLTF("./assets/hotspot.glb") as GLTFResult;

  const [step, setStep] = React.useState<Step>(Step.initial);

  const [width, setWidth] = React.useState(1);

  useSubscription(Subscription.closeHotspot, () => {
    setStep(Step.initial);
  });

  const x2 = React.useMemo(() => {
    return nodes.Hotspot_Surround_01.geometry.boundingBox.max.x * -0.5;
  }, [nodes.Hotspot_Surround_01]);

  const pillGroupRef = React.useRef<THREE.Group>(null);
  const groupRef = React.useRef<THREE.Group>(null);

  useFrame(() => {
    const group = groupRef.current;
    if (group === null) return;
    const pillGroup = pillGroupRef.current;
    if (pillGroup === null) return;
    const speed = 0.3;
    pillGroup.rotation.y = THREE.MathUtils.degToRad(Date.now() * speed);
    group.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      if (!(object.material instanceof THREE.Material)) return;
      object.material.transparent = true;
      object.material.opacity = THREE.MathUtils.lerp(
        object.material.opacity,
        show ? 1 : 0,
        0.05
      );
      object.material.needsUpdate = true;
    });
  });

  const labelPosition = React.useMemo<[x: number, y: number, z: number]>(() => {
    return [padding / 2 + width / 2 + x2 - 0.069 / 2, 0, 0];
  }, [width, x2]);

  const groupProps = useSpring({
    position: position,
  });

  const selectedModel = appState((state) => state.selectedModel);
  const selectedModelComponent = appState(
    (state) => state.selectedModelComponent
  );

  React.useEffect(() => {
    const selected =
      selectedModel?.id === modelId &&
      selectedModelComponent?.id === modelComponent.id;
    if (selected && step === Step.initial) {
      setStep(Step.open);
    }
    if (!selected && step !== Step.initial) {
      setStep(Step.initial);
    }
  }, [
    step,
    selectedModel?.id,
    selectedModelComponent?.id,
    modelId,
    modelComponent.id,
  ]);

  const handleClick = React.useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      if (!show) return;
      switch (step) {
        case Step.initial:
          setStep(Step.open);
          appState.getState().setSelectedModelComponent(modelComponent);
          appState.getState().setModelInfo(null);
          break;
        case Step.open:
          setStep(Step.info);
          appState.getState().setModelInfo({
            image: `./assets/models/${modelId}/${modelId}.png`,
            title: info.title,
            description: info.description,
          });
          break;
        default:
          appState.getState().setModelInfo({
            image: `./assets/models/${modelId}/${modelId}.png`,
            title: info.title,
            description: info.description,
          });
      }
    },
    [step, show]
  );

  return (
    <group scale={scale}>
      <group ref={groupRef} rotation={rotation}>
        <a.group
          {...props}
          {...groupProps}
          onClick={handleClick}
          onPointerMissed={() => {
            if (step === Step.open) {
              appState.getState().setSelectedModelComponent(null);
            }
          }}
        >
          <group scale={0.25}>
            <group scale-x={flipped ? -1 : 1}>
              <group position={[0.67, 0, 0]}>
                <mesh geometry={nodes.Hotspot_Surround_01.geometry}>
                  <meshBasicMaterial color="#babcbe" />
                </mesh>
                <mesh
                  position-x={width + padding}
                  geometry={nodes.Hotspot_Surround_03001.geometry}
                >
                  <meshBasicMaterial color="#babcbe" />
                </mesh>
              </group>
              <group position={labelPosition}>
                <mesh>
                  <boxGeometry args={[width + padding, 0.395, 0.057]} />
                  <meshBasicMaterial color="#babcbe" />
                </mesh>
                <Text
                  scale-x={flipped ? -1 : 1}
                  position-x={0.025}
                  position-z={0.057 + 0.0001}
                  fontSize={0.395 / 2}
                  color="#000000"
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
