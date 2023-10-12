import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const ModelInfoClose = styled.button`
  --size: 2.25em;
  background-color: transparent;
  width: var(--size);
  height: var(--size);
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  padding: 0;
  position: absolute;
  top: calc(var(--size) * 0.35);
  right: calc(var(--size) * 0.35);
`;

export const ModelInfoBody = styled.div`
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  padding: 2.525em;
  padding-block-start: 0.5em;

  p {
    font-size: 1em;
    text-align: center;
  }
`;

export const ModelInfoHeader = styled.div`
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5% 5% 0 5%;

  h3 {
    width: 100%;
    font-size: 2em;
    text-align: center;
  }
`;

export const ModelInfoContainer = styled(motion.div).attrs(() => ({
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
}))`
  --padding: 2.5em;
  width: 65vw;
  line-height: 1.6;
  border-radius: calc(0.9em * var(--zoom, 1));
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2.5em);
`;

export const ModelInfoBackdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModelInfoWrapper = styled.div`
  --padding: 1rem;
  --border-radius: 0.6em;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #082636;
  position: absolute;
  inset: 0;
  z-index: 100;
`;
