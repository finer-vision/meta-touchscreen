import React from "react";
import {
  LabelWrapper,
  Logo,
  MenuWrapper,
  ResetWrapper,
  RotateWrapper,
  Section,
} from "./home-page.style";
import { Subscription } from "@/types";
import useSubscription from "@/hooks/use-subscription";
import Menu from "@/components/menu/menu";
import { appState } from "@/state/app-state";

export default function ScreenSaver() {
  const menuContainerRef = React.useRef<HTMLDivElement>();
  const rotateWrapperRef = React.useRef<HTMLDivElement>();
  const resetWrapperRef = React.useRef<HTMLDivElement>();
  const LogoRef = React.useRef<HTMLDivElement>();
  const labelRef = React.useRef<HTMLDivElement>();
  const [mounted, setMounted] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [mainMenuOpen, setMainMenuOpen] = React.useState(false);

  const selectedModel = appState((state) => state.selectedModel);

  const animateMenu = React.useCallback(() => {
    setMainMenuOpen((prevState) => {
      return !prevState;
    });
  }, []);

  React.useEffect(() => {
    if (
      !menuContainerRef.current &&
      !rotateWrapperRef.current &&
      !LogoRef.current &&
      !labelRef.current
    )
      return;
    if (mounted) {
      const rotateBtn = rotateWrapperRef.current;
      const label = labelRef.current;
      const logo = LogoRef.current;
      if (!mainMenuOpen) {
        rotateBtn.style.animationName = "showElement";
        rotateBtn.style.opacity = "0";
        logo.style.animationName = "showElement";
        logo.style.opacity = "0";
        label.style.animationName = "showElement";
        label.style.opacity = "0";
      }
    } else {
      setMounted(true);
    }
  }, [mainMenuOpen, menuContainerRef, LogoRef, labelRef]);

  React.useEffect(() => {
    if (!mounted) return;
    if (rotate) {
      useSubscription.emit(Subscription.rotate);
    } else {
      useSubscription.emit(Subscription.stopRotate);
    }
  }, [rotate]);

  return (
    <Section backdrop={!mainMenuOpen}>
      {!mainMenuOpen && (
        <>
          <LabelWrapper show={!mainMenuOpen} ref={labelRef}>
            <img src="./assets/label-img.svg" alt="Meta logo" />
            <span>{selectedModel.title.toUpperCase()}</span>
          </LabelWrapper>
          <ResetWrapper
            show={!mainMenuOpen}
            ref={resetWrapperRef}
            onClick={() => {
              setRotate(false);
              useSubscription.emit(Subscription.reset);
            }}
          >
            <img src="./assets/images/reset.png" alt="Rotate model" />
          </ResetWrapper>
          <RotateWrapper
            show={!mainMenuOpen}
            ref={rotateWrapperRef}
            onClick={() => {
              setRotate((rotate) => !rotate);
            }}
          >
            <img src="./assets/images/rotate.png" alt="Rotate model" />
          </RotateWrapper>
          <Logo show={!mainMenuOpen} ref={LogoRef} />
        </>
      )}
      <MenuWrapper>
        <Menu mainMenuOpen={mainMenuOpen} animateMenu={animateMenu} />
      </MenuWrapper>
    </Section>
  );
}
