import React from "react";
import {
  Section,
  LabelWapper,
  Logo,
  MenuWrapper,
  RotateWrapper,
} from "./home-page.style";
import useMeta from "@/hooks/use-meta";
import emitter from "@/services/emitter";
import { Subscription } from "@/types";

export default function ScreenSaver() {
  const { isMenuOpen, setIsMenuOpen, reset } = useMeta();
  const menuContainerRef = React.useRef<HTMLDivElement>();
  const rotateWrapperRef = React.useRef<HTMLDivElement>();
  const LogoRef = React.useRef<HTMLDivElement>();
  const labelRef = React.useRef<HTMLDivElement>();
  const [mounted, setMounted] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);

  React.useEffect(() => {
    if (
      !menuContainerRef.current &&
      !rotateWrapperRef.current &&
      !LogoRef.current &&
      !labelRef.current
    )
      return;
    if (mounted) {
      const menuBtn = menuContainerRef.current;
      const rotateBtn = rotateWrapperRef.current;
      const label = labelRef.current;
      const logo = LogoRef.current;
      if (isMenuOpen) {
        menuBtn.style.transform = "translateX(0px)";
        menuBtn.style.animationName = "slideLeft";
      } else {
        menuBtn.style.transform = "translateX(1952px)";
        menuBtn.style.animationName = "slideRight";
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
  }, [isMenuOpen, menuContainerRef, LogoRef, labelRef]);

  React.useEffect(() => {
    if (mounted) {
      if (rotate) {
        emitter.emit(Subscription.rotate);
      } else {
        emitter.emit(Subscription.stopRotate);
      }
    }
  }, [rotate]);

  return (
    <Section backdrop={!isMenuOpen}>
      {!isMenuOpen && (
        <>
          <LabelWapper show={!isMenuOpen} ref={labelRef}>
            <span  >OPEN RACK V3</span>
          </LabelWapper>
          <RotateWrapper
            show={!isMenuOpen}
            ref={rotateWrapperRef}
            onClick={() => {
              setRotate((rotate) => !rotate);
            }}
          >
            <span>Rrotate the model</span>
          </RotateWrapper>
          <Logo show={!isMenuOpen} ref={LogoRef} />
        </>
      )}
      <MenuWrapper
        onClick={() => {
          setIsMenuOpen((isOpen) => !isOpen);
        }}
      >
        <div className="menuContainer" ref={menuContainerRef}>
          <div className="menu">
            <img src="./assets/menu/menu.png" />
          </div>
          <div className="menuButton">
            <span>Model List</span>
          </div>
        </div>
      </MenuWrapper>
    </Section>
  );
}
