import React from "react";
import { ScreensaverWrapper } from "@/components/screensaver/screensaver.styles";

export default function Screensaver() {
  return (
    <ScreensaverWrapper>
      <video src="./assets/screensaver.mp4" muted loop autoPlay />
    </ScreensaverWrapper>
  );
}
