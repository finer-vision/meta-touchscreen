import React from "react";
import * as THREE from "three";
import { Environment, useAnimations, useGLTF } from "@react-three/drei";
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
  const model = useGLTF(
    `./assets/models/${selectedModel.id}/${selectedModel.id}.glb`
  );

  const animation = useAnimations(model.animations, model.scene);
  const [animating, setAnimating] = React.useState(false);
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    const name = animation.names[0];
    if (name === undefined) return;
    const action = animation.actions[name];
    if (action === undefined) return;
    action.loop = animating ? THREE.LoopPingPong : THREE.LoopOnce;
    action.timeScale = animating ? 1 : -1;
    const time = action.time;
    action.reset();
    action.time = time;
    action.play();
  }, [animation.names[0], animating]);

  const groupRef = React.useRef<THREE.Group>(null);
  const [rotate, setRotate] = React.useState(false);

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

  React.useEffect(() => {
    model.scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      if (!(object.material instanceof THREE.Material)) return;
      object.material.transparent = true;
      object.material.alphaToCoverage = ["Grand Teton Chasis_Vents"].includes(
        object.material.name
      );
      object.material.opacity = 0;
      object.material.needsUpdate = true;
    });
  }, [model.scene]);

  useFrame(() => {
    const speed = 0.05;
    model.scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      if (!(object.material instanceof THREE.Material)) return;
      object.material.transparent = true;
      let opacityEnd = 1;
      if (selectedModelComponent !== null) {
        opacityEnd = 0.6;
      }
      object.material.opacity = THREE.MathUtils.lerp(
        object.material.opacity,
        opacityEnd,
        speed
      );
      object.material.needsUpdate = true;
    });

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
        <Environment
          background={false}
          files="./assets/environment.hdr"
          encoding={THREE.LinearEncoding}
        />
        <group rotation={selectedModel.rotation}>
          <a.group {...props}>
            <group scale={selectedModel.scale}>
              <primitive object={model.scene} />
              {selectedModel.hotspot && (
                <ModelHotspot
                  modelId={selectedModel.id}
                  title="MORE INFO"
                  info={{
                    title: selectedModel.title,
                    description: selectedModel.hotspot.description,
                  }}
                  position={selectedModel.hotspot.position}
                  rotation={selectedModel.hotspot.rotation}
                  flipped={selectedModel.hotspot.flipped}
                />
              )}
              {selectedModel.animationHotspot && (
                <AnimationHotspot
                  title={animating ? "STOP ANIMATION" : "PLAY ANIMATION"}
                  position={selectedModel.animationHotspot.position}
                  rotation={selectedModel.animationHotspot.rotation}
                  flipped={selectedModel.animationHotspot.flipped}
                  onClick={() => {
                    setAnimating((animating) => !animating);
                  }}
                />
              )}
              {selectedModel.components.map((component, index) => {
                return (
                  <ModelComponent
                    key={index}
                    modelId={selectedModel.id}
                    component={component}
                    path={`./assets/models/${selectedModel.id}/${component.id}.glb`}
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
