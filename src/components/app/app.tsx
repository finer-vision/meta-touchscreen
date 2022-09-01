import React from "react";
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import Model from "@/components/model/model"

import Homepage from "@/pages/home-page/home-page";

export default function App() {
  React.useEffect(() => {
    function onContextMenu(event: MouseEvent) {
      event.preventDefault();
    }

    document.addEventListener("contextmenu", onContextMenu);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);
  return (
    <>
      <Canvas legacy flat linear dpr={1} gl={{alpha: true}} style={{width: "100vh", height: "100vw"}}>
        <React.Suspense fallback={<></>}>
          <Model />
        </React.Suspense>
      </Canvas>
      <Homepage />
    </>
  );
}
