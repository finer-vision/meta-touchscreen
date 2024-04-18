import styled from "styled-components";

export const ScreensaverWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    width: 50vw;
    height: auto;
  }
`;
