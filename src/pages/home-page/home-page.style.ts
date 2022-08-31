import styled, { css } from "styled-components";

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

  * {
    pointer-events: auto;
  }

  &:-webkit-scrollbar {
    display: none;
  }

  ${({ backdrop }) => {
    if (!backdrop) {
      return css`
        background-color: rgba(255, 255, 255, 0.5);
      `;
    }
  }}

  @keyframes showElement {
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

export const Logo = styled.div<ShowProps>`
  background-image: url("./assets/logo.svg");
  background-size: 416px 100px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  width: 416px;
  height: 100px;
  position: absolute;
  bottom: calc(var(--gap) * 6.9);
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;

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

export const LabelWapper = styled.div<ShowProps>`
  width: 1250px;
  height: 270px;
  background-color: var(--color-ebony-clay);
  background-image: url("./assets/label-img.svg");
  background-repeat: no-repeat;
  background-position: 10%;
  border-radius: 2.5rem;
  color: var(--color-white);
  position: absolute;
  top: 270px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  span {
    /* font-family: "Inter"; */
    font-style: normal;
    font-weight: 700;
    font-size: 90px;
    line-height: 109px;
    margin-left: 106px;
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

export const MenuWrapper = styled.div<Props>`
  height: 2242px;
  width: 2096px;
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translate(-1952px, -50%);
  z-index: 2;

  .menuContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    animation-duration: 1000ms;
    animation-delay: calc(0.1s + var(--speed) * 1);
    animation-timing-function: var(--ease);
    animation-fill-mode: forwards;
    transform: translateX(0px);

    .menu {
      width: 1952px;
      height: 2242px;
    }

    .menuButton {
      width: 144px;
      height: 469px;
      background-color: var(--color-ebony-clay);
      background-image: url("./assets/cube.svg");
      background-repeat: no-repeat;
      background-position: top;
      background-position-y: 3rem;
      border-radius: 0 1.8rem 1.8rem 0;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        /* font-family: "PT Sans Caption"; */
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        line-height: 58px;
        color: var(--color-white);
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        margin-top: 3rem;
      }
    }
  }

  @keyframes slideLeft {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(1952px);
    }
  }

  @keyframes slideRight {
    from {
      transform: translateX(1952px);
    }
    to {
      transform: translateX(0px);
    }
  }
`;

export const RotateWrapper = styled.div<ShowProps>`
  width: 145px;
  height: 576px;
  background-color: var(--color-ebony-clay);
  background-image: url("./assets/rotate.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-position-y: 2rem;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(0%, -50%);
  border-radius: 1.8rem 0 0 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

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

  span {
    /* font-family: "PT Sans Caption"; */
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 58px;
    color: var(--color-white);
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin-top: 4rem;
  }
`;
