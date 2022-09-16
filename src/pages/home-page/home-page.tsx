import React from "react";
import {
  Section,
  LabelWapper,
  Logo,
  MenuWrapper,
  RotateWrapper,
  ContentWrapper,
} from "./home-page.style";
import emitter from "@/services/emitter";
import { Subscription } from "@/types";
import useSubscription from "@/hooks/use-subscription";
import { Modal } from "@/components/modal/modal";
import Menu from "@/components/menu/menu";

export default function ScreenSaver() {
  const menuContainerRef = React.useRef<HTMLDivElement>();
  const rotateWrapperRef = React.useRef<HTMLDivElement>();
  const LogoRef = React.useRef<HTMLDivElement>();
  const labelRef = React.useRef<HTMLDivElement>();
  const [mounted, setMounted] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [hotspot, setHotspot] = React.useState(false);
  const [mainMenuOpen, setMainMenuOpen] = React.useState(false);

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
    if (mounted) {
      if (rotate) {
        emitter.emit(Subscription.rotate);
      } else {
        emitter.emit(Subscription.stopRotate);
      }
    }
  }, [rotate]);

  useSubscription(Subscription.openHotspot, () => {
    setHotspot(true);
  });

  useSubscription(Subscription.closeHotspot, () => {
    setHotspot(false);
  });

  return (
    <Section backdrop={!mainMenuOpen}>
      {!mainMenuOpen && (
        <>
          <LabelWapper show={!mainMenuOpen} ref={labelRef}>
            <span>OPEN RACK V3</span>
          </LabelWapper>
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
      <Modal
        open={hotspot}
        onClose={() => {
          emitter.emit(Subscription.closeHotspot);
        }}
      >
        <ContentWrapper
          onClick={() => {
            emitter.emit(Subscription.closeHotspot);
          }}
        >
          <img src="./assets/popup.png" />
        </ContentWrapper>
      </Modal>
    </Section>
  );
}
