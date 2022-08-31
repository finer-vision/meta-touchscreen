import styled from "styled-components";

export const SideModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 80.55rem;
  height: 46.05rem;
  background-color: var(--color-powder-blue);
  border-radius: 0 7.5rem 7.5rem 0;
  padding-left: calc(var(--gap) * 5.95);
  padding-right: calc(var(--gap) * 3.4795);
  padding-top: calc(var(--gap) * 3.65);
  padding-bottom: calc(var(--gap) * 3.5);
  overflow: hidden;
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

export const SideModalClose = styled.button`
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  border: none;
`;
