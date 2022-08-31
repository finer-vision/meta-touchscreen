import styled, { css } from "styled-components";
import { SlideLeft, SlideLeftOut } from "@/styles/keyframes";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: var(--z-index-side-modal);
  background-color: rgba(0, 0, 0, var(--opacity));
  animation-timing-function: var(--ease);
  animation-duration: var(--speed);
  animation-fill-mode: forwards;

  @keyframes side-modal-fade-in {
    0% {
      pointer-events: none;
      opacity: 0;
    }
    100% {
      pointer-events: auto;
      opacity: 1;
    }
  }

  @keyframes side-modal-fade-out {
    0% {
      pointer-events: auto;
      opacity: 1;
    }
    100% {
      pointer-events: none;
      opacity: 0;
    }
  }
`;

export const ModalOverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: left;
  align-items: center;
  display: flex;
  z-index: var(--z-index-side-modal);
  animation-timing-function: var(--ease);
  animation-duration: calc(var(--speed) * 2);
  animation-fill-mode: forwards;
  transition: transform calc(var(--speed) * 2) var(--ease);

  @keyframes side-modal-slide-in {
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes side-modal-slide-out {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100vw);
    }
  }
`;
