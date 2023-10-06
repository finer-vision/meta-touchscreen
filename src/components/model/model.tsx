import React from "react";
import * as THREE from "three";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useSubscription from "@/hooks/use-subscription";
import { Subscription } from "@/types";
import { a, useSpring } from "@react-spring/three";
import { appState } from "@/state/app-state";
import ModelComponent from "@/components/model/model-component";
import ModelHotspot from "@/components/model-hotspot/model-hotspot";
import AnimationHotspot from "@/components/animation-hotspot/animation-hotspot";

export default function Model() {
  const selectedModel = appState((state) => state.selectedModel);
  const selectedModelComponent = appState(
    (state) => state.selectedModelComponent
  );
  const model = useGLTF(selectedModel.path);

  const animation = useAnimations(model.animations, model.scene);
  const [animating, setAnimating] = React.useState(false);
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    animation.names.forEach((name) => {
      const action = animation.actions[name];
      if (action === undefined) return;
      console.log(name);
      if (animating) {
        action.loop = THREE.LoopPingPong;
        action.play();
      } else {
        action.stop();
        action.reset();
      }
    });
    return () => {
      animation.names.forEach((name) => {
        const action = animation.actions[name];
        if (action === undefined) return;
        action.stop();
        action.reset();
      });
    };
  }, [animation.names, animating]);

  const groupRef = React.useRef<THREE.Group>(null);
  const [rotate, setRotate] = React.useState(false);

  const showScreensaver = appState((state) => state.showScreensaver);

  React.useEffect(() => {
    setRotate(showScreensaver);
  }, [showScreensaver]);

  useSubscription(Subscription.rotate, () => {
    setRotate(true);
  });

  useSubscription(Subscription.stopRotate, () => {
    setRotate(false);
  });

  useSubscription(Subscription.reset, () => {
    const group = groupRef.current;
    if (group === null) return;
    group.rotation.y = 0;
  });

  React.useMemo(() => {
    model.scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      if (!(object.material instanceof THREE.Material)) return;
      object.material = new THREE.MeshPhysicalMaterial(object.material);
      const alpha = [
        "BLMTCH_Vents",
        "Grand Teton Chasis_Vents",
        "Grand Teton Chasis_Vents.001",
        "Vents",
        "MiniPK front_Vents",
        "WDG400C_Vents",
        "Arrowhead Vents.001",
        "Arrowhead Vents",
        "Storm Point_Vents",
        "Cascade Creek Text ",
        "Storm Point_Vents",
        "Discovery Point_Vents",
        "Rubber Hose Textured",
        "Glacier Point_Vents",
      ].includes(object.material.name);
      object.material.transparent = alpha;
      object.material.alphaToCoverage = alpha;
      object.material.needsUpdate = true;
    });
  }, [model.scene]);

  useFrame(() => {
    if (!rotate) return;
    const group = groupRef.current;
    if (group === null) return;
    group.rotation.y += 0.01;
  });

  const props = useSpring({
    position:
      selectedModelComponent !== null
        ? selectedModel.componentOpenPosition
        : selectedModel.position,
  });

  return (
    <group ref={groupRef}>
      <mesh scale={1.5}>
        <group rotation={selectedModel.rotation}>
          <a.group {...props}>
            <group scale={selectedModel.scale}>
              <primitive object={model.scene} />
              <group scale={1.5}>
                {(selectedModel.hotspots ?? []).map((hotspot, index) => {
                  return (
                    <ModelHotspot
                      key={index}
                      modelId={selectedModel.id}
                      title={hotspot.title ?? "MORE INFO"}
                      info={{
                        title: hotspot.title ?? selectedModel.title,
                        description: hotspot.description,
                      }}
                      scale={hotspot.scale}
                      position={hotspot.position}
                      rotation={hotspot.rotation}
                      flipped={hotspot.flipped}
                      show={!rotate && selectedModelComponent === null}
                    />
                  );
                })}

                {selectedModel.animationHotspot && (
                  <AnimationHotspot
                    title={
                      animating
                        ? selectedModel.animationHotspot.stopLabel ??
                          "STOP ANIMATION"
                        : selectedModel.animationHotspot.playLabel ??
                          "PLAY ANIMATION"
                    }
                    scale={selectedModel.animationHotspot.scale}
                    position={selectedModel.animationHotspot.position}
                    rotation={selectedModel.animationHotspot.rotation}
                    flipped={selectedModel.animationHotspot.flipped}
                    onClick={() => {
                      setAnimating((animating) => !animating);
                    }}
                  />
                )}
              </group>

              {selectedModel.components.map((component, index) => {
                return (
                  <ModelComponent
                    key={index}
                    modelId={selectedModel.id}
                    component={component}
                    open={selectedModelComponent?.id === component.id}
                    showHotspot={
                      !rotate &&
                      (selectedModelComponent === null ||
                        selectedModelComponent?.id === component.id)
                    }
                  />
                );
              })}
            </group>
          </a.group>
        </group>
      </mesh>
    </group>
  );
}
