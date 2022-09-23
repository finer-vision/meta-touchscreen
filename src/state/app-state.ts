import create from "zustand";
import { SelectedModel } from "@/types";
import models from "@/config/models";

type AppState = {
  selectedModel: SelectedModel;
  setSelectedModel: (selectedModel: AppState["selectedModel"]) => void;
};

export const appState = create<AppState>((set) => {
  return {
    selectedModel: {
      model: models[0],
      component: null,
    },
    setSelectedModel(selectedModel) {
      set({ selectedModel });
    },
  };
});
