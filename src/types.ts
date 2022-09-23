export enum Subscription {
  rotate = "rotate",
  stopRotate = "stopRotate",
  openHotspot = "openHotspot",
  closeHotspot = "closeHotspot",
  reset = "reset",
}

export type ModelComponent = {
  id: string;
  title: string;
};

export type Model = {
  id: string;
  title: string;
  components: ModelComponent[];
};

export type SelectedModel = {
  model: Model;
  component: ModelComponent | null;
};
