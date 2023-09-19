import styled, { css } from "styled-components/macro";
import { motion } from "framer-motion";

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: max-content;
  transform: translateX(-45.724999999999994em);
  transition: transform 0.6s ease;
`;

export const MenuLeft = styled.div`
  height: 39.5em;
  display: flex;
  flex-direction: column;
`;

export const MenuHandle = styled.div`
  height: 10em;
  width: 3em;

  div {
    border-top-right-radius: 0.6em;
    border-bottom-right-radius: 0.6em;
    backdrop-filter: blur(2.5em);
    background: rgba(255, 255, 255, 0.40);
    height: 10em;
    position: relative;
    width: 100%;
  }

  #open-icon {
    width: 50%;
    position: absolute;
    left: 50%;
    top: 16%;
    transform: translateX(-50%);
  }

  #open-text {
    position: absolute;
    width: 200%;
    transform: rotate(-90deg);
    left: -50%;
    top: 50%;
    font-weight: 500;
  }

  #close-icon {
    width: 50%;
    position: absolute;
    left: 50%;
    top: 26%;
    transform: translateX(-50%);
  }

  #close-text {
    position: absolute;
    width: 200%;
    transform: rotate(-90deg);
    left: -50%;
    top: 40%;
    font-weight: 500;
  }

  img {
    width: auto;
    height: 100%;
  }
`;

interface DropDownImageProps {
  id?: string;
}

export const DropDownImage = styled.div<DropDownImageProps>`
  width: 45%;
  height: 100%;
  ${(props) =>
    ["power-shelf", "bbu"].some(
      (whitelist: string) => whitelist === props.id
    ) &&
    `
    height: 70%;
    margin-left: 3%;
    margin-top: 4%;
  `}
  ${(props) =>
    ["storm-point", "cascade-creek", "arrowhead-pools"].some(
      (whitelist: string) => whitelist === props.id
    ) &&
    `
    height: 80%;
    margin-left: 3%;
    margin-top: 4%;
  `}
  ${(props) =>
    props.id === "rack-adapter" &&
    `
    height: 100%;
  `}
  ${(props) =>
    props.id === "module" &&
    `
    height: 90%;
  `}
  ${(props) =>
    props.id === "blind-mate-chassis" &&
    `
    height: 75%;
    margin-top: 4%;
  `}
  ${(props) =>
    props.id === "rpu" &&
    `
    height: 80%;
    margin-top: 2%;
  `}
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`;

export const DropDownItemFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  height: 8vw;

  :last-child {
    margin-bottom: 0;
  }

  span {
    font-size: calc(1.25rem*.8);
    color: #1f2b32;
    position: absolute;
    left: 50%;
    padding-right: 5%;
  }

  & {
    border-top: 1px solid 31, 43, 50, 0.3);
    border-bottom: 1px solid rgba(31, 43, 50, 0.3);
  }

  &:last-child {
    border-bottom: none;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DropDown = styled.div<{ open: boolean }>`
  position: absolute;
  right: 1em;
  width: calc(18.45em * 0.8);
  background-color: #dddee0;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  transition: all 0.1s ease;

  ${({ open }) => {
    if (!open) {
      return css`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `;
    }
  }}
`;

export const Main = styled.div<{ open: boolean }>`
  background-color: #1f2b32;
  flex-grow: 1;
  border-bottom-right-radius: 1.5em;
  position: relative;
  transition: width 0.3s ease, border-top-right-radius 0.5s ease;
  margin-top: -0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ open }) => {
    if (open) {
      return css`
        width: calc(46.8em * 0.8);
        border-top-right-radius: 1.5em;
      `;
    } else {
      return css`
        width: calc(27.275em * 0.8);
      `;
    }
  }}
`;

export const MainItemContainer = styled.div`
  padding: 1em;
  padding-bottom: 0;
  height: 92%;
  overflow: hidden;
`;

export const MainItem = styled(motion.div)`
  margin-bottom: calc(1.25em * 0.8);
  position: relative;
  overflow: auto;
  border-radius: 1em;
  height: calc(4.5em * 0.8);

  :last-child {
    margin-bottom: 0;
  }
`;

export const MainItemFlex = styled.div`
  width: calc(24.5475em * 0.8);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1em;
  background-color: white;
  border-radius: 1em;
  gap: 1em;
  overflow: hidden;
  position: relative;

  span {
    color: #20202e;
    font-size: calc(1.75em * 0.8);
    z-index: 1;
    font-weight: bold;
    text-transform: uppercase;
    position: absolute;
    left: 37%;
    padding-right: 1vw;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 2%;
    height: 100%;
    width: 35%;
  }
`;

export const ModelPreview = styled.img`
  height: 100%;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Arrow = styled.svg`
  stroke: #494957;
  width: 7%;
  aspect-ratio: 1;
  position: absolute;
  right: 4%;
`;

export const Title = styled.div`
  background-color: #1f2b32;
  height: 5em;
  padding: 1.5em 1em;
  width: calc(27.275em * 0.8);
  border-top-right-radius: 1.5em;
  display: flex;
  align-items: flex-end;

  h1 {
    font-weight: 700;
    font-size: calc(2.5em * 0.8);
    line-height: 1;
  }
`;

export const NavWrapper = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  img {
    width: calc(1.1em * 0.8);
  }
`;

export const Prev = styled.button`
  background: none;
  display: inline-block;
  border: none;
`;
export const Next = styled.button`
  background: none;
  display: inline-block;
  border: none;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: calc(0.8em * 0.8);
  height: calc(0.8em * 0.8);
  border: 2.5px solid white;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#ffffff" : "transparent")};
`;

export const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
`;
