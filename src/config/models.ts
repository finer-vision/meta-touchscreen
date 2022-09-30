import * as THREE from "three";
import { Model } from "@/types";

const PLACEHOLDER_DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubiaLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubiaLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti`;

const models: Model[] = [
  {
    id: "orv3",
    title: "OPEN RACK v3",
    position: [0, -1.7, 0],
    componentOpenPosition: [0, -1.7, -1],
    scale: 1.3,
    components: [
      {
        id: "power-shelf",
        title: "POWER SHELF",
        position: [0, 2.17, 0],
        openPosition: [0, 1.075, 1],
        hotspot: {
          description: `Meet the Power Shelf. In ORV3 the Power Shelf can be installed in any OU position and isn’t bolted to the busbar, allowing for maximum rack configuration flexibility. With the increased power capability and efficiency of 48V, ORV3 delivers more total kilowatt than ORV2.`,
          position: [0, 0.1, 0.6],
          openPosition: [-0.25, 0.2, 0.3],
        },
      },
      {
        id: "bbu",
        title: "BATTERY BACK UP",
        position: [0, 2.075, 0],
        openPosition: [0, 1.075, 1],
        hotspot: {
          description: `The increased performance Battery Backup (BBU) module has a 4 minute capacity compared to 90 seconds in its predecessor. It also has more capacity with 15 kilowatts of power as well as increased flexibility. Similar to the Power Shelf, you can put the BBU in any location you want to customize your needs.`,
          position: [0.05, -0.1, 0.6],
          openPosition: [0.25, 0.25, 0.38],
          flipped: true,
        },
      },
    ],
  },
  {
    id: "noahs-ark",
    title: "NOAH'S ARK",
    components: [],
  },
  {
    id: "blind-mate-interfaces",
    title: "BLIND MATE INTERFACES",
    scale: 2,
    position: [0, -0.15, 0],
    rotation: [THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(-20), 0],
    components: [],
    hotspot: {
      description: PLACEHOLDER_DESCRIPTION,
      position: [-0.15, 0.25, 0],
      rotation: [0, THREE.MathUtils.degToRad(20), 0],
    },
  },
  {
    id: "liquid-cooling-cart",
    title: "LIQUID COOLING CART",
    rotation: [0, THREE.MathUtils.degToRad(-60), 0],
    position: [0, -0.6, 0],
    components: [],
    scale: 1.15,
    hotspot: {
      description: `Get to know the ORV3 Blind-mate Interfaces. These solutions are designed to enable liquid cooling at scale, with optimized serviceability. The overarching aims are to reduce human interaction and error, as well as dramatically reducing service and maintenance time. The blind mate solutions include blind mate valves, manifolds, rack frame interfaces, hoses and tubing, and a unique chassis designed specifically for blind-mate applications. All of which can be easily integrated into ORV3.`,
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
    rotation: [THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(-20), 0],
    componentOpenPosition: [0, 0.5, -1],
    scale: 2,
    components: [
      {
        id: "rack-adapter",
        title: "RACK ADAPTER",
        position: [0, 0, 0],
        openPosition: [0, -0.5, 1],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [-0.2, 0.25, 0],
          openPosition: [-0.25, 0.25, 0],
          rotation: [0, THREE.MathUtils.degToRad(20), 0],
        },
      },
      {
        id: "module",
        title: "MODULE",
        position: [0, 0, 0],
        openPosition: [0, -0.5, 1],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, -0.15, 0.3],
          openPosition: [0.225, -0.15, 0.25],
          rotation: [0, THREE.MathUtils.degToRad(20), 0],
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
    rotation: [THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(-20), 0],
    components: [],
    hotspot: {
      description: `Minipack2 is Meta's next generation fabric switch, doubling the bandwidth of Minipack1. Minipack2 is positioned in the fabric layer, connecting rack switches to each other and also forwards traffic up to higher layers of the network. By designing for more bandwidth, this allows for greater machine to machine (or east to west) traffic and machine to user (or north to south) traffic.`,
      position: [0.1, 0.28, 0],
      rotation: [0, THREE.MathUtils.degToRad(20), 0],
      flipped: true,
    },
  },
  {
    id: "grand-canyon",
    title: "GRAND CANYON",
    scale: 1.5,
    position: [0, -0.25, 0],
    rotation: [THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(-20), 0],
    components: [],
    hotspot: {
      description: PLACEHOLDER_DESCRIPTION,
      position: [0, 0.3, 0.25],
      rotation: [0, THREE.MathUtils.degToRad(20), 0],
    },
  },
  {
    id: "grand-teton",
    title: "GRAND TETON",
    position: [0, -0.3, 0],
    rotation: [THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(-20), 0],
    componentOpenPosition: [0, -0.3, -0.75],
    scale: 1.5,
    components: [
      {
        id: "arrowhead-pools",
        title: "ARROWHEAD POOLS",
        position: [0, 0, 0.1],
        openPosition: [0, 0, 0.75],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0, 0.5, 0.2],
          openPosition: [-0.225, 0.3, 0],
          rotation: [0, THREE.MathUtils.degToRad(20), 0],
        },
      },
      {
        id: "storm-point",
        title: "STORM POINT",
        position: [0, 0.28, 0.1],
        openPosition: [0, 0, 0.75],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [0.2, -0.4, -0.2],
          openPosition: [-0.225, 0.225, 0],
          rotation: [0, THREE.MathUtils.degToRad(20), 0],
        },
      },
      {
        id: "cascade-creek",
        title: "CASCADE CREEK",
        position: [0, 0.18, 0.1],
        openPosition: [0, 0, 0.75],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [-0.1, -0.3, 0],
          openPosition: [0.225, 0.225, 0],
          rotation: [0, THREE.MathUtils.degToRad(20), 0],
          flipped: true,
        },
      },
    ],
  },
  {
    id: "glacier-point",
    title: "GLACIER POINT",
    components: [],
  },
  {
    id: "discovery-point",
    title: "DISCOVERY POINT",
    components: [],
    scale: 2.5,
    position: [0, 0, 0],
    rotation: [THREE.MathUtils.degToRad(15), THREE.MathUtils.degToRad(45), 0],
    hotspot: {
      position: [-0.2, 0.2, 0],
      rotation: [0, THREE.MathUtils.degToRad(-45), 0],
      description: PLACEHOLDER_DESCRIPTION,
    },
  },
];

export default models;
