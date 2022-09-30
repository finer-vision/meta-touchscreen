import create from "zustand";
import { Model, ModelComponent } from "@/types";
import models from "@/config/models";

type AppState = {
  selectedModel: Model;
  setSelectedModel: (selectedModel: AppState["selectedModel"]) => void;
  selectedModelComponent: ModelComponent | null;
  setSelectedModelComponent: (
    selectedModelComponent: AppState["selectedModelComponent"]
  ) => void;
};

export const appState = create<AppState>((set) => {
  return {
    // selectedModel: models[0],
    selectedModel: models[6],
    setSelectedModel(selectedModel) {
      set({ selectedModel });
    },
    selectedModelComponent: null,
    setSelectedModelComponent(selectedModelComponent) {
      set({ selectedModelComponent });
    },
  };
});
