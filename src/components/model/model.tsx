import React from "react";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useSubscription from "@/hooks/use-subscription";
import { Subscription } from "@/types";

export default function Model() {
  const gltf = useGLTF("./assets/open-rack-v3.glb");
  const [rotate, setRotate] = React.useState(false);
  useSubscription(Subscription.rotate, () => {
    setRotate(true);
  });

  useSubscription(Subscription.stopRotate, () => {
    setRotate(false);
  });

  useFrame(() => {
    if (rotate) {
      gltf.scene.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh scale={1.5}>
        <Environment background={false} files="./assets/environment.hdr" />
        <primitive object={gltf.scene} position-y={-1.5} />
        <ambientLight />
        <OrbitControls />
      </mesh>
    </>
  );
}
