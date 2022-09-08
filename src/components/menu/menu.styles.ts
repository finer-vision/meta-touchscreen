import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: max-content;
  transform: translateX(-80em);
  transition: transform 0.35s ease;
`;

export const MenuLeft = styled.div`
  height: 100vh;
`;

export const MenuHandle = styled.div``;

export const Main = styled.div`
  background-color: #1f2b32;
  height: 90vh;
  width: 80em;
  border-top-right-radius: 3em;
  border-bottom-right-radius: 3em;
  position: relative;
`;

export const MainItemContainer = styled.div`
  padding: 2em;
`;

export const MainItem = styled.div`
  margin-bottom: 1.5em;
  position: relative;
  overflow: auto;
  border-radius: 2em;
`;

export const MainItemFlex = styled.div`
  width: 35em;
  height: 100%;
  padding: 3em;
  background-color: white;
  border-radius: 2em;

  & > span {
    color: #1f2b32;
    font-size: 2em;
    position: relative;
    z-index: 1;
  }
`;

export const DropDown = styled.div`
  position: absolute;
  right: 2em;
  top: 2em;
  width: 38em;
  background-color: #edeeef;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  span {
    color: #1f2b32;
    font-size: 1.5em;
    padding: 2.5em;

    &:nth-child(even) {
      background-color: rgba(31, 43, 50, 0.08);
    }
  }
`;

export const Title = styled.div`
  background-color: #1f2b32;
  height: 10vh;
  padding: 3em 2em;
  width: 40em;
  border-top-right-radius: 3em;

  h1 {
    font-weight: 700;
    font-size: 4em;
  }
`;
