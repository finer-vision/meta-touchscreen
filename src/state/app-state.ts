import create from "zustand";

type AppState = {
  modelId: string;
  setModelId: (modelId: AppState["modelId"]) => void;
};

export const appState = create<AppState>((set) => {
  return {
    modelId: "0-orv3",
    setModelId(modelId) {
      set({ modelId });
    },
  };
});
