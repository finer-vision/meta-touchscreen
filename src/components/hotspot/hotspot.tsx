import React from "react";
import { createPortal } from "react-dom";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { Html, Text, useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { ModelComponent, Vector } from "@/types";
import ModelInfo from "@/components/model-info/model-info";
import { appState } from "@/state/app-state";

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

type Props = Omit<GroupProps, "position"> & {
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
};

enum Step {
  initial = "initial",
  open = "open",
  info = "info",
}

export default function Hotspot({
  modelId,
  modelComponent,
  title,
  info,
  padding = 0.1,
  flipped = false,
  position,
  ...props
}: Props) {
  const { nodes } = useGLTF("./assets/hotspot.glb") as GLTFResult;

  const [step, setStep] = React.useState<Step>(Step.initial);

  const [width, setWidth] = React.useState(1);

  const modelInfoRoot = React.useMemo(() => {
    return document.querySelector<HTMLDivElement>("#root-model-info");
  }, []);

  const x2 = React.useMemo(() => {
    return nodes.Hotspot_Surround_01.geometry.boundingBox.max.x * -0.5;
  }, [nodes.Hotspot_Surround_01]);

  const pillGroupRef = React.useRef<THREE.Group>(null);

  useFrame(() => {
    const pillGroup = pillGroupRef.current;
    if (pillGroup === null) return;
    const speed = 0.05;
    pillGroup.rotation.y = (pillGroup.rotation.y + speed) % (Math.PI * 2);
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
      switch (step) {
        case Step.initial:
          setStep(Step.open);
          appState.getState().setSelectedModelComponent(modelComponent);
          break;
        case Step.open:
          setStep(Step.info);
          break;
      }
    },
    [step]
  );

  return (
    <>
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
                <boxBufferGeometry args={[width + padding, 0.395, 0.057]} />
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
      {step === Step.info && (
        <Html>
          {createPortal(
            <ModelInfo
              modelId={modelId}
              componentId={modelComponent.id}
              title={info.title}
              description={info.description}
              onClose={() => {
                setStep(Step.initial);
                appState.getState().setSelectedModelComponent(null);
              }}
            />,
            modelInfoRoot
          )}
        </Html>
      )}
    </>
  );
}
