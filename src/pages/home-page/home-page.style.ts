import styled, { css } from "styled-components/macro";
import { motion } from "framer-motion";

type Props = {
  onClick?: (e: Event) => void;
};

type ShowProps = {
  show: boolean;
};

type SectionProps = {
  backdrop: boolean;
};

export const Section = styled.section<SectionProps>`
  width: 100vw;
  height: 100vh;
  min-height: 100%;
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;

  * {
    pointer-events: auto;
  }

  ${({ backdrop }) => {
    if (!backdrop) {
      return css`
        background-color: rgba(0,0,0,0.3);
      `;
    }
  }} @keyframes showElement {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes hiddenElement {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  aspect-ratio: 416 / 100;
  width: auto;
  height: 2.604166666666667vh;
  position: absolute;
  bottom: calc(var(--gap) * 3.45);
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 150%;
  video {
    height: 100%;
  }
`;

export const LabelWrapper = styled(motion.div).attrs(() => ({
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}))`
  width: max-content;
  height: 8vh;
  padding-inline: 5vh;
  background-color: var(--color-ebony-clay);
  border-radius: 1.5rem;
  color: var(--color-white);
  position: absolute;
  top: 7.03125vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  gap: 2vh;

  img {
    width: auto;
    height: 2.604166666666667vh;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 2.34375vh;
    line-height: 1.211111111111111em;
  }
`;

export const MenuWrapper = styled.div<Props>`
  pointer-events: none;
`;

export const ResetWrapper = styled.div<ShowProps>`
  position: absolute;
  right: 0;
  top: 41.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  height: calc(3.7760416666666665vh*.8);

  img {
    width: auto;
    height: 100%;
  }

  ${({ show }) => {
    if (!show) {
      return css`
        animation-duration: 1000ms;
        animation-timing-function: var(--ease);
        animation-fill-mode: forwards;
      `;
    } else {
      return css`
        animation-duration: 1000ms;
        animation-delay: calc(0.1s + var(--speed) * 1);
        animation-timing-function: var(--ease);
        animation-fill-mode: forwards;
      `;
    }
  }}
`;

export const RotateWrapper = styled.div<ShowProps>`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  height: calc(12.213541666666666vh*.8);

  img {
    width: auto;
    height: 100%;
  }

  ${({ show }) => {
    if (!show) {
      return css`
        animation-duration: 1000ms;
        animation-timing-function: var(--ease);
        animation-fill-mode: forwards;
      `;
    } else {
      return css`
        animation-duration: 1000ms;
        animation-delay: calc(0.1s + var(--speed) * 1);
        animation-timing-function: var(--ease);
        animation-fill-mode: forwards;
      `;
    }
  }}
`;
