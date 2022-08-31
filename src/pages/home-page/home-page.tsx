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
  const labelRef = React.useRef<HTMLSpanElement>();
  const [mounted, setMounted] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);

  React.useEffect(() => {
    if (!labelRef.current) return;
    labelRef.current.innerText = "OPEN RACK V3";
  }, []);

  React.useEffect(() => {
    console.log(isMenuOpen, mounted);
    if (
      !menuContainerRef.current &&
      !rotateWrapperRef.current &&
      !labelRef.current
    )
      return;
    if (mounted) {
      const menuBtn = menuContainerRef.current;
      const rotateBtn = rotateWrapperRef.current;
      if (isMenuOpen) {
        labelRef.current.innerText = "Model List";
        menuBtn.style.transform = "translateX(0px)";
        menuBtn.style.animationName = "slideLeft";
        rotateBtn.style.animationName = "hiddenButton";
        rotateBtn.style.opacity = "0";
      } else {
        labelRef.current.innerText = "OPEN RACK V3";
        menuBtn.style.transform = "translateX(1952px)";
        menuBtn.style.animationName = "slideRight";
        rotateBtn.style.animationName = "showButton";
      }
    } else {
      setMounted(true);
    }
  }, [isMenuOpen, menuContainerRef, labelRef]);

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
    <Section>
      <LabelWapper>
        <span ref={labelRef} />
      </LabelWapper>
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
      <RotateWrapper
        show={!isMenuOpen}
        ref={rotateWrapperRef}
        onClick={() => {
          setRotate((rotate) => !rotate);
        }}
      >
        <span>Rrotate the model</span>
      </RotateWrapper>
      <Logo />
    </Section>
  );
}
