import * as THREE from "three";
import { Model } from "@/types";

const PLACEHOLDER_DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubiaLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubiaLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti`;

const models: Model[] = [
  {
    id: "orv3",
    title: "OPEN RACK v3",
    position: [0, -1.7, -0.5],
    componentOpenPosition: [0, -1.7, -1],
    scale: 1.4,
    components: [
      {
        id: "power-shelf",
        title: "POWER SHELF",
        position: [0, 2.17, 0],
        openPosition: [0, 1.075, 1],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0.2, 0.1, 0.6],
          openPosition: [-0.25, 0.2, 0.3],
        },
      },
      {
        id: "bbu",
        title: "BATTERY BACK UP",
        position: [0, 2.075, 0],
        openPosition: [0, 1.075, 1],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [-0.2, -0.05, 0.6],
          openPosition: [0.25, 0.25, 0.38],
          flipped: true,
        },
      },
    ],
  },
  {
    id: "noahs-ark",
    title: "NOAH'S ARK",
    components: [
      {
        id: "rpu",
        title: "RPU",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "ttv",
        title: "TTV",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
    ],
  },
  {
    id: "blind-mate-interfaces",
    title: "BLIND MATE INTERFACES",
    components: [
      {
        id: "arrowhead-pools",
        title: "ARROWHEAD POOLS",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "storm-point",
        title: "STORM POINT",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "cascade-creek",
        title: "CASCADE CREEK",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
    ],
  },
  {
    id: "liquid-cooling-cart",
    title: "LIQUID COOLING CART",
    rotation: [0, THREE.MathUtils.degToRad(-60), 0],
    position: [0, -1.5, 0],
    components: [],
    hotspot: {
      description: PLACEHOLDER_DESCRIPTION,
      flipped: true,
      openPosition: [0, 0, 0],
      position: [0, 1.4, 0.5],
      rotation: [0, THREE.MathUtils.degToRad(60), 0],
    },
  },
  {
    id: "wedge-400c",
    title: "WEDGE 400C",
    position: [0, 0, 0],
    componentOpenPosition: [0, 0.5, -1],
    scale: 1.5,
    components: [
      {
        id: "rack-adapter",
        title: "RACK ADAPTER",
        position: [0, 0, 0],
        openPosition: [0, -0.5, 1],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [-0.2, 0.25, 0.4],
          openPosition: [-0.2, 0.25, 0.4],
        },
      },
      {
        id: "module",
        title: "MODULE",
        position: [0, 0, 0],
        openPosition: [0, -0.5, 1],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [-0.1, -0.15, 0.4],
          openPosition: [0.2, -0.15, 0.4],
          flipped: true,
        },
      },
    ],
  },
  {
    id: "minipack2",
    title: "MINIPACK2",
    scale: 2,
    position: [0, -0.25, 0],
    rotation: [THREE.MathUtils.degToRad(15), THREE.MathUtils.degToRad(15), 0],
    components: [],
    hotspot: {
      description: PLACEHOLDER_DESCRIPTION,
      position: [0.1, 0.28, 0],
      rotation: [0, THREE.MathUtils.degToRad(-15), 0],
      flipped: true,
    },
  },
  {
    id: "grand-canyon",
    title: "GRAND CANYON",
    scale: 1,
    position: [-0.25, 0, 0],
    rotation: [THREE.MathUtils.degToRad(25), THREE.MathUtils.degToRad(25), 0],
    components: [],
    hotspot: {
      description: PLACEHOLDER_DESCRIPTION,
      position: [0, 0.3, 0.25],
      rotation: [0, THREE.MathUtils.degToRad(-25), 0],
    },
  },
  {
    id: "grand-teton",
    title: "GRAND TETON",
    components: [
      {
        id: "arrowhead-pools",
        title: "ARROWHEAD POOLS",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "storm-point",
        title: "STORM POINT",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "cascade-creek",
        title: "CASCADE CREEK",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
    ],
  },
  {
    id: "glacier-point",
    title: "GLACIER POINT",
    components: [
      {
        id: "arrowhead-pools",
        title: "ARROWHEAD POOLS",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "storm-point",
        title: "STORM POINT",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "cascade-creek",
        title: "CASCADE CREEK",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
    ],
  },
  {
    id: "discovery-point",
    title: "DISCOVERY POINT",
    components: [
      {
        id: "arrowhead-pools",
        title: "ARROWHEAD POOLS",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "storm-point",
        title: "STORM POINT",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "cascade-creek",
        title: "CASCADE CREEK",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
    ],
  },
  {
    id: "kings-canyon",
    title: "kings-canyon",
    components: [
      {
        id: "arrowhead-pools",
        title: "ARROWHEAD POOLS",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "storm-point",
        title: "STORM POINT",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
      {
        id: "cascade-creek",
        title: "CASCADE CREEK",
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0, 0],
        },
      },
    ],
  },
];

export default models;
