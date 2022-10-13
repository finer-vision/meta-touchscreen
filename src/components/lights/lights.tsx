import React from "react";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";

export default function Lights() {
  const spotLight0Ref = React.useRef<THREE.SpotLight>(null);
  const spotLight1Ref = React.useRef<THREE.SpotLight>(null);
  const spotLight2Ref = React.useRef<THREE.SpotLight>(null);
  useHelper(spotLight0Ref, THREE.SpotLightHelper, "red");
  useHelper(spotLight1Ref, THREE.SpotLightHelper, "green");
  useHelper(spotLight2Ref, THREE.SpotLightHelper, "blue");

  const props = useControls({
    name: "Red SpotLight Pos",
    spotLight0Position: [0, 4, 0],
    spotLight0Intensity: 300,
    spotLight1Position: [2, 4, 0],
    spotLight1Intensity: 300,
    spotLight2Position: [-2, 4, 0],
    spotLight2Intensity: 300,
  });

  return (
    <>
      <ambientLight />
      <spotLight
        ref={spotLight0Ref}
        position={props.spotLight0Position}
        intensity={props.spotLight0Intensity}
      />
      <spotLight
        ref={spotLight1Ref}
        position={props.spotLight1Position}
        intensity={props.spotLight1Intensity}
      />
      <spotLight
        ref={spotLight2Ref}
        position={props.spotLight2Position}
        intensity={props.spotLight2Intensity}
      />
    </>
  );
}
