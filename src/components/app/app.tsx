import React from "react";

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
      <Homepage />
    </>
  );
}
