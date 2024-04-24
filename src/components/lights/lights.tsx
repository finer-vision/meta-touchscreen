import React from "react";
import { appState } from "@/state/app-state";

export default function Lights() {
  const selectedModel = appState((state) => state.selectedModel);

  switch (selectedModel.id) {
    case "orv3":
    case "noahs-ark":
    case "blind-mate-interfaces":
    case "liquid-cooling-cart":
      return (
        <>
          <spotLight
            position={[-5, 5, -5]}
            intensity={2500}
            power={2500}
            decay={2}
            distance={0}
          />
          <spotLight
            position={[5, 5, 5]}
            intensity={2500}
            power={2500}
            decay={2}
            distance={0}
          />
          <spotLight
            position={[0, -5, 0]}
            intensity={500}
            power={500}
            decay={2}
            distance={0}
          />
        </>
      );
    default:
      return (
        <>
          <spotLight
            position={[-5, 5, -5]}
            intensity={2500}
            power={2500}
            decay={2}
            distance={0}
          />
          <spotLight
            position={[5, -5, 5]}
            intensity={2500}
            power={2500}
            decay={2}
            distance={0}
          />
        </>
      );
  }
}
