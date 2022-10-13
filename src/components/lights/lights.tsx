import React from "react";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";

export default function Lights() {
  const spotLight0Ref = React.useRef<THREE.SpotLight>(null);
  const spotLight1Ref = React.useRef<THREE.SpotLight>(null);
  const spotLight2Ref = React.useRef<THREE.SpotLight>(null);
  useHelper(spotLight0Ref, THREE.SpotLightHelper, "red");
  useHelper(spotLight1Ref, THREE.SpotLightHelper, "green");
  useHelper(spotLight2Ref, THREE.SpotLightHelper, "blue");

  return (
    <>
      <ambientLight />
      <spotLight ref={spotLight0Ref} position={[0, 10, 0]} intensity={300} />
      <spotLight ref={spotLight1Ref} position={[10, 10, 0]} intensity={300} />
      <spotLight ref={spotLight2Ref} position={[-10, 10, 0]} intensity={300} />
    </>
  );
}
