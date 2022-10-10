import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const ModelInfoClose = styled.button`
  --size: 3.5em;
  background-color: #eef3f5;
  width: var(--size);
  height: var(--size);
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
`;

export const ModelInfoBody = styled.div`
  background-color: #eef3f5;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  padding: 5%;

  p {
    font-size: 1em;
  }
`;

export const ModelInfoHeader = styled.div`
  background-color: #ffffff;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
  padding-bottom: 3%;
  padding-top: 3%;

  h3 {
    font-size: 2em;
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
  width: 60vw;
  line-height: 1.6;
`;

export const ModelInfoWrapper = styled.div`
  --padding: 1rem;
  --border-radius: 1.25em;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #082636;
  position: absolute;
  inset: 0;
  z-index: 100;
`;
