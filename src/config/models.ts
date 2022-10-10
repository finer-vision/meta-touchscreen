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
    title: "AACL",
    position: [0, -1.3, 0],
    componentOpenPosition: [0, -1.3, -1],
    scale: 1,
    components: [
      {
        id: "rpu",
        title: "RPU",
        position: [0, 2.17, 0],
        openPosition: [0, 1.075, 1],
        hotspot: {
          description: `The RPU (Reservoir and Pumping Unit) provides the pressure head and distributes coolant to the entire Air Assisted Liquid Cooling (AALC) solution.​ The RPU also serves as the brain for AALC solution, which is responsible for control and monitoring of the system. How does it work? Cooled fluid flows into the RPU from the heat exchanger. Coolant collects in the RPU reservoir and is pulled into 2 pumps (the other 2 pumps are redundant). The pumps create pressure to push the coolant back out of the RPU. Finally the coolant flows out of the RPU into the cold manifold in front of the rack.`,
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
          description: `Team providing`,
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
    componentOpenPosition: [0, -1.3, 0],
    rotation: [0, 0, 0],
    components: [
      {
        id: "blind-mate-chassis",
        title: "BLIND MATE CHASSIS",
        position: [0, 2.17, 0],
        openPosition: [0, 1.075, 1],
        hotspot: {
          description: `Blind mate chassis is a reference design for future IT gear using blind mating liquid cooling and to provide functional design during development. There are no manual hose connections or manifolds on the front of racks. Instead, blind mate chassis has quick connect plug valves mounted at the rear for mating directly into sockets mounted on the blind mate manifold. Within the chassis, there’s a theoretical liquid cooling passive cold plate loop (PCL) connecting to an internal manifold, which terminates into the hoses that connect to the quick connect plugs at the rear of the chassis. The injector handles are located at the front of the chassis, which have long travel and provide mechanical advantage to overcome the fluid and spring forces to mate the chassis into the rack.`,
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
      description: `The liquid cooling cart is Meta’s solution to servicing liquid cooled equipment in our data centers. This battery powered cart is capable of handling 50 liters of coolant at a time, and performs operations such as filling, draining, and purging the rack. By developing this cart, we enable our data center technicians to confidently interact with liquid enabled equipment in all data center variants.`,
      flipped: true,
      openPosition: [0, 0, 0],
      position: [0, 1.4, 0.5],
      rotation: [0, THREE.MathUtils.degToRad(60), 0],
    },
    animationHotspot: {
      position: [0, 0.6, 0.5],
      rotation: [0, THREE.MathUtils.degToRad(60), 0],
    },
  },
  {
    id: "wedge-400c",
    title: "WEDGE 400C",
    position: [0, 0, 0],
    rotation: [THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(-20), 0],
    componentOpenPosition: [0, 0.5, -0.5],
    scale: 1.5,
    components: [
      {
        id: "rack-adapter",
        title: "RACK ADAPTER",
        position: [0, 0, 0],
        openPosition: [0, -0.25, 0.5],
        hotspot: {
          description: `In Wedge 400 and Wedge 400C the Switch Control Module, or SCM for short, is removable to allow for easier servicing. First remove Fans 1 & 2 then pull the green ejector handle to release the SCM. From there, you can remove the DIMM, Solid-State Drive or BMC Storage Module (SSD and BSM)`,
          position: [-0.2, 0.25, 0],
          openPosition: [-0.13, 0.25, 0.25],
          rotation: [0, THREE.MathUtils.degToRad(20), 0],
        },
      },
      {
        id: "module",
        title: "MODULE",
        position: [0, 0, 0],
        openPosition: [0, -0.25, 0.5],
        hotspot: {
          description: `In Wedge 400 and Wedge 400C the Switch Control Module, or SCM for short, is removable to allow for easier servicing. First remove Fans 1 & 2 then pull the green ejector handle to release the SCM. From there, you can remove the DIMM, Solid-State Drive or BMC Storage Module (SSD and BSM).`,
          position: [0, 0, 0.5],
          openPosition: [0.125, -0.25, 0.25],
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
      description: `Minipack2 is Meta’s next generation fabric switch, doubling the bandwidth of Minipack1. Minipack2 is positioned in the fabric layer, connecting rack switches to each other and also forwards traffic up to higher layers of the network. By designing for more bandwidth, this allows for greater machine to machine (or east to west) traffic and machine to user (or north to south) traffic.`,
      position: [0.1, 0.28, 0],
      rotation: [0, THREE.MathUtils.degToRad(20), 0],
      flipped: true,
    },
    animationHotspot: {
      position: [0.35, 0, 0.55],
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
    animationHotspot: {
      position: [0.35, 0.6, 0.55],
      rotation: [0, THREE.MathUtils.degToRad(20), 0],
      flipped: true,
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
          description: `Arrowhead Pool is our next generation GPU tray, it features 8 GPUs to enable both training and inference applications within the data center. As it weighs over 41kilos, the tray is on rails, has a ‘hard stop’ and safety latches to ensure safe serviceability for on-site technicians.`,
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
          description: `Storm Point is our next generation CPU tray. It is a two socket system with 39 field replaceable units (FRUs) including:
- The DIMMs
- The CPUs
- And the TSFF NICs (tall small form factor network interface card)

This new CPU tray has increased memory, bandwidth and performance compared to its predecessor Angels Landing.`,
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
          description: `Cascade Creek is our Switch Tray. it is comprised of;
- 8 x RDMA NICs
- And up to 16 x E1.S Drives
Bringing the total number of FRUs to 25. Both the NICs and E1.S Drives are front serviceable, and hot-swappable enabling faster serviceability for on-site technicians.`,
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
