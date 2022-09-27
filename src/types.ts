export enum Subscription {
  rotate = "rotate",
  stopRotate = "stopRotate",
  openHotspot = "openHotspot",
  closeHotspot = "closeHotspot",
  reset = "reset",
}

export type Vector = [x: number, y: number, z: number];

export type ModelComponent = {
  id: string;
  title: string;
  position?: Vector;
  scale?: number;
  hotspot: {
    description: string;
    position?: Vector;
    flipped?: boolean;
  };
};

export type Model = {
  id: string;
  title: string;
  position?: Vector;
  scale?: number;
  components: ModelComponent[];
};

export type SelectedModel = {
  model: Model;
  component: ModelComponent | null;
};
