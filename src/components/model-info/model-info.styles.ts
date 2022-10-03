import styled, { keyframes } from "styled-components";

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
  --size: 3em;
  background-color: #eef3f5;
  width: var(--size);
  height: var(--size);
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;

  span {
    font-size: calc(var(--size) * 0.75);
    font-weight: lighter;
  }
`;

export const ModelInfoBody = styled.div`
  background-color: #eef3f5;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  display: grid;
  gap: 1.5em;
  grid-template-columns: repeat(2, 1fr);
  padding: calc(var(--padding) / 2) var(--padding);

  p {
    font-size: 1.5em;
  }

  img {
    width: 100%;
  }
`;

export const ModelInfoHeader = styled.div`
  background-color: #ffffff;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(var(--padding) / 2) var(--padding);

  h3 {
    font-size: 2em;
  }
`;

export const ModelInfoContainer = styled.div`
  --padding: 2.5em;
  width: calc(100% - (var(--padding) * 2));
  animation: ${fadeInUp} 500ms ease-out forwards;
`;

export const ModelInfoWrapper = styled.div`
  --padding: 1rem;
  --border-radius: 1.25em;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #082636;
  position: absolute;
  inset: 0;
  animation: ${fadeIn} 300ms ease forwards;
`;
