export enum Subscription {
  rotate = "rotate",
  stopRotate = "stopRotate",
  openHotspot = "openHotspot",
  closeHotspot = "closeHotspot",
  reset = "reset",
}

export type Vector = [x: number, y: number, z: number];

type Hotspot = {
  title?: string;
  description: string;
  position?: Vector;
  rotation?: Vector;
  openPosition?: Vector;
  flipped?: boolean;
  scale?: number;
};

type AnimationHotspot = {
  scale?: number;
  position?: Vector;
  rotation?: Vector;
  flipped?: boolean;
};

export type ModelComponent = {
  id: string;
  title: string;
  position?: Vector;
  openPosition?: Vector;
  scale?: number;
  hotspots: Hotspot[];
  path: string;
};

export type Model = {
  id: string;
  title: string;
  position?: Vector;
  rotation?: Vector;
  componentOpenPosition?: Vector;
  scale?: number;
  components: ModelComponent[];
  hotspots?: Hotspot[];
  animationHotspot?: AnimationHotspot;
  path: string;
  maxDistance?: number;
  minDistance?: number;
};
