import styled, { css } from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: max-content;
  transform: translateX(-91.44999999999999em);
  transition: transform 0.6s ease;
`;

export const MenuLeft = styled.div`
  height: 58.09895833333333vh;
`;

export const MenuHandle = styled.div``;

export const DropDownImage = styled.div`
  width: 10em;
  height: 100%;
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const DropDownItemFlex = styled.div`
  height: 5.494791666666667vh;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  padding-left: 1em;
  gap: 2em;

  :last-child {
    margin-bottom: 0;
  }

  span {
    font-size: 1.9rem;
    color: #1f2b32;
  }

  img {
    width: 9em;
  }

  &:nth-child(even) {
    border-top: 1px solid rgba(31, 43, 50, 0.3);
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
  right: 2em;
  width: 36.9em;
  background-color: #dddee0;
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
  height: 51.550448vh;
  border-bottom-right-radius: 3em;
  position: relative;
  transition: width 0.3s ease, border-top-right-radius 0.5s ease;
  margin-top: -1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ open }) => {
    if (open) {
      return css`
        width: 91.44999999999999em;
        border-top-right-radius: 3em;
      `;
    } else {
      return css`
        width: 54.55em;
      `;
    }
  }}
`;

export const MainItemContainer = styled.div`
  padding: 2em;
  padding-bottom: 0;
  height: 92%;
  overflow: hidden;
`;

export const MainItem = styled.div`
  margin-bottom: 2.5em;
  position: relative;
  overflow: auto;
  border-radius: 2em;
  height: 5.494791666666667vh;

  :last-child {
    margin-bottom: 0;
  }
`;

export const MainItemFlex = styled.div`
  width: 49.095em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2em;
  background-color: white;
  border-radius: 2em;
  gap: 2em;
  overflow: hidden;

  & > span {
    color: #20202e;
    font-size: 3.5em;
    position: relative;
    z-index: 1;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const ModelPreview = styled.img`
  height: 100%;
  width: auto;
  display: block;
`;

export const Arrow = styled.img`
  margin-left: auto;
  width: 2.3em;
`;

export const Title = styled.div`
  background-color: #1f2b32;
  height: 7vh;
  padding: 3em 2em;
  width: 54.55em;
  border-top-right-radius: 3em;
  display: flex;
  align-items: flex-end;

  h1 {
    font-weight: 700;
    font-size: 5em;
    line-height: 1;
  }
`;

export const NavWrapper = styled.div`
  width: 49.095em;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  img {
    width: 2.2em;
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
  width: 1.6em;
  height: 1.6em;
  border: 5px solid white;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#ffffff" : "transparent")};
`;

export const DotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8em;
`;
