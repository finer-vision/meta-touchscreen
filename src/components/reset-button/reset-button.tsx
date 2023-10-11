import React from "react";
import { ResetButtonWrapper } from "@/components/reset-button/reset-button.styles";
import { appState } from "@/state/app-state";

export default function ResetButton() {
  return (
    <ResetButtonWrapper
      onClick={() => {
        appState.getState().setShowScreensaver(true);
      }}
    />
  );
}
