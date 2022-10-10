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
          description: `Open Rack V3 has many new features that will improve how we design, configure, build, deploy and manage our IT gear. ORV3 features a new 48v power systems & distributed busbar that can support higher power densities and faster load transients, as well as an increased battery backup system providing up to 4 minutes of backup during outage events. It also supports flexible IT gear form factors for supporting OpenU & RU gear, pluggable connection to the busbar, flexible shelf placement locations, and increased rack height with support for tool-less rails to enable more gear and faster development.`,
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
    position: [0, -1.7, 0],
    componentOpenPosition: [0, -1.7, -1],
    scale: 1.3,
    components: [
      {
        id: "rpu",
        title: "RPU",
        position: [0, 2.17, 0],
        openPosition: [0, 1.075, 1],
        hotspot: {
          description: `Open Rack V3 has many new features that will improve how we design, configure, build, deploy and manage our IT gear. ORV3 features a new 48v power systems & distributed busbar that can support higher power densities and faster load transients, as well as an increased battery backup system providing up to 4 minutes of backup during outage events. It also supports flexible IT gear form factors for supporting OpenU & RU gear, pluggable connection to the busbar, flexible shelf placement locations, and increased rack height with support for tool-less rails to enable more gear and faster development.`,
          position: [0, 0.1, 0.6],
          openPosition: [-0.25, 0.2, 0.3],
        },
      },
      {
        id: "ttv",
        title: "TTV",
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
    id: "blind-mate-interfaces",
    title: "BLIND MATE INTERFACES",
    scale: 1,
    position: [0, -1.3, 0],
    rotation: [0, 0, 0],
    components: [
      {
        id: "blind-mate-chassis",
        title: "BLIND MATE CHASSIS",
        position: [0, 2.17, 0],
        openPosition: [0, 1.075, 1],
        hotspot: {
          description: `Open Rack V3 has many new features that will improve how we design, configure, build, deploy and manage our IT gear. ORV3 features a new 48v power systems & distributed busbar that can support higher power densities and faster load transients, as well as an increased battery backup system providing up to 4 minutes of backup during outage events. It also supports flexible IT gear form factors for supporting OpenU & RU gear, pluggable connection to the busbar, flexible shelf placement locations, and increased rack height with support for tool-less rails to enable more gear and faster development.`,
          position: [0, 0.1, 0.6],
          openPosition: [-0.15, 0.2, 0.3],
        },
      },
      // {
      //   id: "blind-mate-manifold",
      //   title: "BLIND MATE MANIFOLD",
      //   position: [0, 2.075, 0],
      //   openPosition: [0, 1.075, 1],
      //   hotspot: {
      //     description: `The increased performance Battery Backup (BBU) module has a 4 minute capacity compared to 90 seconds in its predecessor. It also has more capacity with 15 kilowatts of power as well as increased flexibility. Similar to the Power Shelf, you can put the BBU in any location you want to customize your needs.`,
      //     position: [0.05, -0.1, 0.6],
      //     openPosition: [0.25, 0.25, 0.38],
      //     flipped: true,
      //   },
      // },
    ],
  },
  {
    id: "liquid-cooling-cart",
    title: "LIQUID COOLING CART",
    rotation: [0, THREE.MathUtils.degToRad(-60), 0],
    position: [0, -0.6, 0],
    components: [],
    scale: 1.15,
    hotspot: {
      description: `The liquid cooling cart is Meta’s solution to servicing liquid cooled equipment in our data centers.

      This battery powered cart is capable of handling 50 liters of coolant at a time, and performs operations such as filling, draining, and purging the rack.

      By developing this cart, we enable our data center technicians to confidently interact with liquid enabled equipment in all data center variants.`,
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
    componentOpenPosition: [0, 0.5, -2],
    scale: 1.5,
    components: [
      {
        id: "rack-adapter",
        title: "RACK ADAPTER",
        position: [0, 0, 0],
        openPosition: [0, -0.5, 1],
        hotspot: {
          description: `The adapter tray for Wedge 400 & 400C is designed for integration with Open Rack V2. When unracking the adapter tray, we have added a safety stop feature. This is designed to stop the tray pulling out all the way, allow the user to adjust their hold of the tray before pressing to release the system all the way out of the rack.`,
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
          description: `In Wedge 400 and Wedge 400C the Switch Control Module, or SCM for short, is removable to allow for easier servicing. First remove Fans 1 & 2 then pull the green ejector handle to release the SCM. From there, you can remove the DIMM, Solid-State Drive or BMC Storage Module (SSD and BSM).`,
          position: [0, 0, 0.5],
          openPosition: [0.1, -0.2, 0.25],
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
    components: [
      {
        id: "line-card-ejector",
        title: "LINE CARD EJECTOR",
        position: [0, 0, 0],
        openPosition: [0, -0.5, 1],
        hotspot: {
          description: `The adapter tray for Wedge 400 & 400C is designed for integration with Open Rack V2. When unracking the adapter tray, we have added a safety stop feature. This is designed to stop the tray pulling out all the way, allow the user to adjust their hold of the tray before pressing to release the system all the way out of the rack.`,
          position: [-0.2, 0.25, 0],
          openPosition: [-0.25, 0.25, 0],
          rotation: [0, THREE.MathUtils.degToRad(20), 0],
        },
      },
      {
        id: "chasis",
        title: "CHASSIS",
        position: [0, 0, 0],
        openPosition: [0, -0.5, 1],
        hotspot: {
          description: `In Wedge 400 and Wedge 400C the Switch Control Module, or SCM for short, is removable to allow for easier servicing. First remove Fans 1 & 2 then pull the green ejector handle to release the SCM. From there, you can remove the DIMM, Solid-State Drive or BMC Storage Module (SSD and BSM).`,
          position: [0, 0, 0.5],
          openPosition: [0.1, -0.2, 0.25],
          rotation: [0, THREE.MathUtils.degToRad(20), 0],
          flipped: true,
        },
      },
    ],
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
      description: `Grand Canyon is Meta’s next generation storage platform with improved hardware security and modularity for future upgrades of key commodities. The platform is designed to support higher density HDD without performance degradation and improves power utilization. The platform Enables large scale deployments in hyperscale environments by leveraging OpenBMC, OCP NIC, industry standard interfaces and improves serviceability.`,
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
    scale: 1.75,
    components: [
      {
        id: "arrowhead-pools",
        title: "ARROWHEAD POOLS",
        position: [0, 0, 0.1],
        openPosition: [0, 0, 0.75],
        hotspot: {
          description: PLACEHOLDER_DESCRIPTION,
          position: [-0.1, 0.1, 0.4],
          openPosition: [-0.175, -0.1, 0.25],
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
          position: [0.1, 0.1, 0.4],
          openPosition: [-0.175, -0.1, 0.25],
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
          position: [0.1, 0.075, 0.4],
          openPosition: [0.16, -0.1, 0.25],
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
      description: `Discovery Point is an expansion card to the Yosemite v3 Platform that provides an industry standard PCIe interface to a Delta Lake server board for more functionality through added storage, networking, or other cards.  

      With both an x8 and x16 PCIe Gen3 connection, the possibilities are endless!`,
    },
  },
];

export default models;
