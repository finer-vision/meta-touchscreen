import create from "zustand";
import { Model, ModelComponent } from "@/types";
import models from "@/config/models";

type AppState = {
  showScreensaver: boolean;
  setShowScreensaver: (showScreensaver: AppState["showScreensaver"]) => void;
  selectedModel: Model;
  setSelectedModel: (selectedModel: AppState["selectedModel"]) => void;
  selectedModelComponent: ModelComponent | null;
  setSelectedModelComponent: (
    selectedModelComponent: AppState["selectedModelComponent"]
  ) => void;
  modelInfo: any;
  setModelInfo: (modelInfo: AppState["modelInfo"]) => void;
  zoom: number;
  setZoom: (zoom: AppState["zoom"]) => void;
};

interface ModelInfoProps {
  title: string;
  description: string;
}

export const appState = create<AppState>((set) => {
  return {
    showScreensaver: false,
    setShowScreensaver(showScreensaver) {
      // set({ showScreensaver });
    },
    selectedModel: models[10],
    setSelectedModel(selectedModel) {
      set({ selectedModel });
    },
    selectedModelComponent: null,
    setSelectedModelComponent(selectedModelComponent) {
      set({ selectedModelComponent });
    },
    modelInfo: null,
    setModelInfo(modelInfo: ModelInfoProps) {
      set({ modelInfo });
    },
    zoom: 1,
    setZoom(zoom) {
      set({ zoom });
    },
  };
});
