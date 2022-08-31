import styled from "styled-components";

export const PopModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation-timing-function: var(--ease);
  animation-duration: var(--speed);
  animation-fill-mode: forwards;
  opacity: 0;

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

  @keyframes zoom-in-down {
    0% {
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    }
    60% {
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes zoom-out {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: translate3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes bounce-in {
    0%, 20%, 40%, 60%, 80%, 100% {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1)
    }

    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(.97, .97, .97);
    }
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`;

export const PopModalContainer = styled.div`
  position: relative;
`;

export const PopModalClose = styled.button`
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  border: none;
  position: absolute;
  top: 2rem;
  right: 2rem;
`;
