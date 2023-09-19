import React, { useEffect } from "react";
import {
  LabelWrapper,
  MenuWrapper,
  ResetWrapper,
  RotateWrapper,
  Section,
} from "./home-page.style";
import { Subscription } from "@/types";
import useSubscription from "@/hooks/use-subscription";
import Menu from "@/components/menu/menu";
import { appState } from "@/state/app-state";
import { AnimatePresence } from "framer-motion";

export default function ScreenSaver() {
  const menuContainerRef = React.useRef<HTMLDivElement>();
  const rotateWrapperRef = React.useRef<HTMLDivElement>();
  const resetWrapperRef = React.useRef<HTMLDivElement>();
  const labelRef = React.useRef<HTMLDivElement>();
  const [mounted, setMounted] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const [mainMenuOpen, setMainMenuOpen] = React.useState(false);

  const showScreensaver = appState((state) => state.showScreensaver);

  React.useEffect(() => {
    if (showScreensaver) {
      setMainMenuOpen(false);
    }
  }, [showScreensaver]);

  const selectedModel = appState((state) => state.selectedModel);
  const modelInfo = appState((state) => state.modelInfo);

  const animateMenu = React.useCallback(() => {
    setMainMenuOpen((prevState) => {
      return !prevState;
    });
  }, []);

  useEffect(() => {
    if (
      !menuContainerRef.current &&
      !rotateWrapperRef.current &&
      !labelRef.current
    )
      return;
    if (mounted) {
      const rotateBtn = rotateWrapperRef.current;
      const label = labelRef.current;
      if (!mainMenuOpen) {
        rotateBtn.style.animationName = "showElement";
        rotateBtn.style.opacity = "0";
        label.style.animationName = "showElement";
        label.style.opacity = "0";
      }
    } else {
      setMounted(true);
    }
  }, [mainMenuOpen, menuContainerRef, labelRef]);

  useEffect(() => {
    if (!mounted) return;
    if (rotate) {
      useSubscription.emit(Subscription.rotate);
    } else {
      useSubscription.emit(Subscription.stopRotate);
    }
  }, [rotate]);

  return (
    <AnimatePresence>
      <Section backdrop={!mainMenuOpen}>
        {!mainMenuOpen && !modelInfo && (
          <>
            <LabelWrapper ref={labelRef}>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <path d="M58.1538 31.8467H13.8461C10.7999 31.8467 8.30762 34.339 8.30762 37.3852V63.6928C8.30762 66.739 10.7999 69.2313 13.8461 69.2313H58.1538C61.1999 69.2313 63.6922 66.739 63.6922 63.6928V37.3852C63.6922 34.339 61.1999 31.8467 58.1538 31.8467ZM42.923 61.6159C40.8461 63.0005 38.4922 63.6928 35.9999 63.6928C35.1692 63.6928 34.3384 63.5544 33.5076 63.4159C30.1845 62.7236 27.4153 60.9236 25.6153 58.1544L30.1845 55.1082C31.1538 56.6313 32.8153 57.739 34.6153 58.0159C36.4153 58.4313 38.2153 58.0159 39.8769 56.9082C43.0615 54.8313 43.8922 50.4005 41.8153 47.3544C40.8461 45.8313 39.1845 44.7236 37.3845 44.4467C35.5845 44.0313 33.7845 44.4467 32.123 45.5544C31.7076 45.8313 31.4307 46.1082 31.1538 46.3852L35.9999 51.2313H23.5384V38.7698L27.1384 42.3698C27.6922 41.8159 28.3845 41.2621 28.9384 40.8467C31.7076 39.0467 35.0307 38.3544 38.3538 38.9082C41.6768 39.6005 44.4461 41.4005 46.2461 44.1698C50.123 49.9852 48.5999 57.739 42.923 61.6159ZM13.8461 25.0621V25.6159V25.0621ZM15.2307 26.3082H20.7692C21.5999 26.3082 22.1538 25.8928 22.1538 25.0621V24.9236C22.1538 17.0313 28.9384 10.5236 36.9692 11.0775C44.3076 11.6313 49.8461 18.0005 49.8461 25.4775V25.0621C49.8461 25.8928 50.3999 26.3082 51.2307 26.3082H56.7692C57.5999 26.3082 58.1538 25.8928 58.1538 25.0621V24.9236C58.1538 12.3236 47.6307 2.21592 34.8922 2.76977C23.123 3.32362 14.123 13.2928 13.8461 25.0621C13.9845 25.7544 14.5384 26.3082 15.2307 26.3082Z" fill="white"/>
              </svg>
            </ResetWrapper>
            <RotateWrapper
              show={!mainMenuOpen}
              ref={rotateWrapperRef}
              onClick={() => {
                setRotate((rotate) => !rotate);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="78" height="80" viewBox="0 0 78 80" fill="none">
                <path d="M39 20C20.475 20 6.5 27.1667 6.5 36.6667C6.5 44.8333 16.8675 51.2667 31.5575 52.9333L30.1925 54.3C29.8879 54.6099 29.6461 54.9785 29.4811 55.3848C29.3161 55.7909 29.2312 56.2266 29.2312 56.6667C29.2312 57.1067 29.3161 57.5424 29.4811 57.9486C29.6461 58.3548 29.8879 58.7235 30.1925 59.0333C30.4946 59.3458 30.8541 59.5937 31.2501 59.763C31.6462 59.9322 32.071 60.0193 32.5 60.0193C32.929 60.0193 33.3538 59.9322 33.7499 59.763C34.1459 59.5937 34.5054 59.3458 34.8075 59.0333L41.3075 52.3667C41.6034 52.0497 41.8353 51.6758 41.99 51.2667C42.3151 50.4551 42.3151 49.5449 41.99 48.7333C41.8353 48.3242 41.6034 47.9503 41.3075 47.6333L34.8075 40.9667C34.1955 40.339 33.3655 39.9864 32.5 39.9864C31.6345 39.9864 30.8045 40.339 30.1925 40.9667C29.5805 41.5943 29.2367 42.4457 29.2367 43.3333C29.2367 44.221 29.5805 45.0723 30.1925 45.7L30.5825 46.0667C19.5 44.4667 13 40 13 36.6667C13 32.6 23.14 26.6667 39 26.6667C54.86 26.6667 65 32.6 65 36.6667C65 39.4333 60.2875 43.3333 51.3175 45.3333C50.8929 45.4168 50.4889 45.5862 50.1289 45.8318C49.769 46.0774 49.4605 46.3941 49.2214 46.7635C48.9823 47.1329 48.8174 47.5475 48.7365 47.983C48.6556 48.4186 48.6601 48.8663 48.75 49.3C48.8387 49.7295 49.0093 50.1367 49.252 50.4984C49.4946 50.86 49.8045 51.169 50.1638 51.4075C50.5232 51.646 50.9249 51.8093 51.346 51.8881C51.7671 51.9669 52.1992 51.9596 52.6175 51.8667C64.48 49.2 71.5 43.5333 71.5 36.6667C71.5 27.1667 57.525 20 39 20Z" fill="white"/>
              </svg>
              <span>Rotate Model</span>
            </RotateWrapper>
          </>
        )}
        <MenuWrapper>
          <Menu mainMenuOpen={mainMenuOpen} animateMenu={animateMenu} />
        </MenuWrapper>
      </Section>
    </AnimatePresence>
  );
}
