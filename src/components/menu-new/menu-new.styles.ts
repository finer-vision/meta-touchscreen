import styled from "styled-components";

export const MenuNewBackButton = styled.svg`
  width: 3.35em;
  height: auto;
  margin-inline: auto;
  display: block;
  margin-bottom: 1.125em;
`;

export const MenuNewMoreButton = styled.div`
  border-radius: 0.9em;
  color: #d7d7d7;
  background-color: currentColor;
  backdrop-filter: blur(0.675em);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1.725em;
  gap: 0.7em;
  height: 2.7em;
  width: max-content;
  padding-inline: 1.2em;
  position: relative;
  margin-inline: auto;
  margin-bottom: 1.125em;

  span {
    font-size: 1.15em;
    text-align: center;
    color: #2b2b2b;
  }

  svg {
    width: auto;
    height: 100%;
    position: absolute;
    top: 50%;
    right: 0;
    translate: 0 -50%;
    scale: 1.24;
    transition: rotate 300ms ease;
  }

  &.back {
    svg {
      rotate: 180deg;
    }
  }
`;

export const MenuNewListArrowButton = styled.svg`
  width: auto;
  height: 2.35em;
`;

export const MenuNewListDetails = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5em;

  img {
    width: 6em;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  span {
    font-size: 1em;
  }
`;

export const MenuNewListItem = styled.div`
  height: 5.275em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75em;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0.1em 0.1em 0 rgba(0, 0, 0, 0.25);
  padding-inline: 0.7em;
`;

export const MenuNewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.675em;
  padding: 1.125em;
`;

export const MenuNewHeader = styled.div`
  border-bottom: 0.070675em solid #e9eff2;
  background: rgba(255, 255, 255, 0.6);
  padding-block: 1.175em;
  padding-inline: 1.8em;

  span {
    font-size: 1.5548em;
  }
`;

export const MenuNewMain = styled.div`
  width: 22.075em;
  overflow: hidden;
  border-radius: 0.9em;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1.25em);
`;

export const MenuNewToggleButton = styled.div`
  --gap: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
  padding-block: var(--gap);
  border-top-right-radius: 0.9em;
  border-bottom-right-radius: 0.9em;
  background-color: rgba(255, 255, 255, 0.4);
  width: var(--toggle-button-width);
  cursor: pointer;
  backdrop-filter: blur(1.25em);

  svg {
    width: 1.4em;
    height: auto;
  }

  span {
    writing-mode: vertical-lr;
    rotate: 180deg;
    font-size: 1.125em;
    color: #ffffff;
  }

  &.open {
    span {
      color: #000000;
    }
  }
`;

export const MenuNewWrapper = styled.div`
  --open: 0;
  --toggle-button-width: 3.6em;
  position: absolute;
  left: 0;
  top: 50%;
  translate: calc((-100% + var(--toggle-button-width)) * (1 - var(--open))) -50%;
  transform-origin: 0 50%;
  display: flex;
  align-items: center;
  color: #2b2b2b;
  transition: translate 300ms ease;

  // Hack to keep the menu visible on desktop
  @media (orientation: landscape) {
    scale: 0.7;
  }
`;
