import styled from "styled-components";

export const ModelInfoClose = styled.button`
  --size: 6em;
  background-color: #eef3f5;
  width: var(--size);
  height: var(--size);
  border-radius: 1em;
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
  gap: 2em;
  grid-template-columns: repeat(2, 1fr);
  padding: calc(var(--padding) / 2) var(--padding);

  p {
    font-size: 2em;
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
    font-size: 4em;
  }
`;

export const ModelInfoContainer = styled.div`
  --padding: 5em;
  width: calc(100% - (var(--padding) * 2));
`;

export const ModelInfoWrapper = styled.div`
  --padding: 2rem;
  --border-radius: 2.5em;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #082636;
  position: absolute;
  inset: 0;
`;
