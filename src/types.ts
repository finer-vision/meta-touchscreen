export enum Subscription {
  rotate = "rotate",
  stopRotate = "stopRotate",
  openHotspot = "openHotspot",
  closeHotspot = "closeHotspot",
  reset = "reset",
}

export type Vector = [x: number, y: number, z: number];

type Hotspot = {
  description: string;
  position?: Vector;
  rotation?: Vector;
  openPosition?: Vector;
  flipped?: boolean;
};

export type ModelComponent = {
  id: string;
  title: string;
  position?: Vector;
  openPosition?: Vector;
  scale?: number;
  hotspot: Hotspot;
};

export type Model = {
  id: string;
  title: string;
  position?: Vector;
  rotation?: Vector;
  componentOpenPosition?: Vector;
  scale?: number;
  components: ModelComponent[];
  hotspot?: Hotspot;
};