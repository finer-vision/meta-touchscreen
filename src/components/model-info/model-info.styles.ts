import styled, { keyframes } from "styled-components/macro";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    translate: 0 50%;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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

export const ModelInfoContainer = styled.div`
  --padding: 2.5em;
  width: 60vw;
  animation: ${fadeInUp} 500ms ease-out forwards;
  line-height: 1.6;
`;

export const ModelInfoWrapper = styled.div`
  --padding: 1rem;
  --border-radius: 1.25em;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #082636;
  position: absolute;
  inset: 0;
  animation: ${fadeIn} 300ms ease forwards;
`;
