import styled, { css } from "styled-components";
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
  --rotate-height: 10em;
  --reset-height: 3em;
  --button-gap: 1em;
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
        background-color: rgba(0, 0, 0, 0.3);
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

export const Gradient = styled.div`
  background: linear-gradient(180deg, rgba(31, 43, 50, 0) 0%, #1f2b32 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 37.75%;
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
  bottom: 0.5em;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  font-size: 350%;
  z-index: 2;
  video {
    height: 100%;
  }
`;

export const LabelWrapper = styled(motion.div).attrs(() => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}))`
  width: max-content;
  height: 8vh;
  padding-inline: 5vh;
  color: #000000;
  position: absolute;
  top: 7.03125vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  gap: 2vh;
  border-radius: 2.2em;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2.5em);

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
  top: 50%;
  transform: translateY(
    calc(
      -50% - (var(--reset-height) / 2) - (
          (var(--reset-height) + var(--reset-height) + var(--button-gap)) / 2
        ) - (var(--button-gap) / 2)
    )
  );
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  height: var(--reset-height);
  border-top-left-radius: 0.6em;
  border-bottom-left-radius: 0.6em;
  backdrop-filter: blur(2.5em);
  background: rgba(255, 255, 255, 0.4);
  width: 3em;
  aspect-ratio: 1;

  svg {
    width: auto;
    height: 50%;
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
  transform: translateY(
    calc(
      -50% + (var(--rotate-height) / 2) - (
          (var(--reset-height) + var(--reset-height) + var(--button-gap)) / 2
        ) + (var(--button-gap) / 2)
    )
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  height: var(--rotate-height);
  border-top-left-radius: 0.6em;
  border-bottom-left-radius: 0.6em;
  backdrop-filter: blur(2.5em);
  background: rgba(255, 255, 255, 0.4);
  width: 3em;

  svg {
    width: 50%;
    height: auto;
    position: absolute;
    top: 0.5em;
  }

  span {
    transform: rotate(-90deg) translateX(-0.75em);
    white-space: nowrap;
    position: absolute;
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
