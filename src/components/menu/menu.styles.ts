import styled, { css } from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: max-content;
  transform: translateX(-74em);
  transition: transform 0.6s ease;
`;

export const MenuLeft = styled.div`
  height: 100vh;
`;

export const MenuHandle = styled.div``;

export const DropDownItemFlex = styled.div`
  height: 13rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  padding-left: 1em;
  gap: 2em;

  span {
    font-size: 1.9rem;
    color: #1f2b32;
  }
  
  img {
    width: 9em;
  }

  &:nth-child(even) {
    background-color: rgba(31, 43, 50, 0.08);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DropDown = styled.div<{ open: boolean }>`
  position: absolute;
  right: 2em;
  width: 32em;
  background-color: #edeeef;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
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
  height: 90vh;
  border-bottom-right-radius: 3em;
  position: relative;
  transition: width 0.3s ease, border-top-right-radius 0.5s ease;

  ${({ open }) => {
    if (open) {
      return css`
        width: 74em;
        border-top-right-radius: 3em;
      `;
    } else {
      return css`
        width: 40em;
      `;
    }
  }}
`;

export const MainItemContainer = styled.div`
  padding: 2em;
  height: 100%;
  overflow: hidden;
`;

export const MainItem = styled.div`
  margin-bottom: 1.5em;
  position: relative;
  overflow: auto;
  border-radius: 2em;
  height: 13em;
`;

export const MainItemFlex = styled.div`
  width: 36em;
  height: 100%;
  display: flex;
  align-items: center;
  padding-inline: 3em;
  background-color: white;
  border-radius: 2em;
  gap: 2em;
  overflow: hidden;

  & > span {
    color: #1f2b32;
    font-size: 2em;
    position: relative;
    z-index: 1;
    font-weight: bold;
    text-transform: uppercase;
  }

  img {
    width: 10em;
  }
`;

export const Title = styled.div`
  background-color: #1f2b32;
  height: 10vh;
  padding: 3em 2em;
  width: 40em;
  border-top-right-radius: 3em;
  display: flex;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 4em;
    line-height: 1;
  }
`;