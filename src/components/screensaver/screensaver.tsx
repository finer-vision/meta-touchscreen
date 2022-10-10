import React from "react";
import { ScreensaverWrapper } from "@/components/screensaver/screensaver.styles";

export default function Screensaver() {
  return (
    <ScreensaverWrapper>
      <video src="./assets/screensaver.webm" muted loop autoPlay />
    </ScreensaverWrapper>
  );
}
