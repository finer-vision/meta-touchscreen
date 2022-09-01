import React from "react";
import * as THREE from "three";
import { OrbitControls as Controls, useGLTF, Environment } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {OrbitControls} from "three-stdlib"
import useSubscription from "@/hooks/use-subscription";
import { Subscription } from "@/types";
import Hotspot from "@/components/hotspot/hotspot";
import emitter from "@/services/emitter";

export default function Model() {
  const gltf = useGLTF("./assets/open-rack-v3.glb");
  const [rotate, setRotate] = React.useState(false);
  useSubscription(Subscription.rotate, () => {
    setRotate(true);
  });

  useSubscription(Subscription.stopRotate, () => {
    setRotate(false);
  });

  const camera = useThree(state => state.camera);
  const scene = useThree(state => state.scene);

  React.useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera;
    cam.aspect = window.innerHeight/window.innerWidth;
    cam.up.set(-1, 0, 0);
    cam.updateProjectionMatrix();
  }, [camera]);

  React.useEffect(() => {
    scene.rotation.z = Math.PI*0.5;
  }, [scene]);

  useFrame(() => {
    if (rotate) {
      gltf.scene.rotation.y += 0.01;
    }
  });

  const controlsRef = React.useRef<OrbitControls>(null);

  React.useEffect(() => {
const controls = controlsRef.current;
if (controls===null) return;
// const {x, y} = controls.object.up;
// controls.object.up.x = y;
// controls.object.up.y = x;
console.log(controls);
  }, []);

  return (
    <>
      <mesh scale={1.5}>
        <Environment background={false} files="./assets/environment.hdr" />
        <primitive object={gltf.scene} position-y={-1.5} />
        <Hotspot title="BATTERY BACKUP" position={[-0.4, 0.6, 0.6]} onClick={() => {
            emitter.emit(Subscription.openHotspot)
        }}/>
        <Hotspot title="POWER SHELF" position={[-0, -0.3, 0.6]} onClick={() => {
            emitter.emit(Subscription.openHotspot)
        }}/>
        <ambientLight />
        <Controls ref={controlsRef} />
      </mesh>
    </>
  );
}
