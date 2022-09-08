import React from "react";
import {
  DropDown,
  Main,
  MainItemContainer,
  MenuHandle,
  MenuLeft,
  MenuWrapper,
  Title,
  MainItem,
  MainItemFlex,
} from "@/components/menu/menu.styles";

const models = [
  {
    id: 0,
    title: "Open Rack",
  },
  {
    id: 1,
    title: "Open Rack",
  },
  {
    id: 2,
    title: "Open Rack",
  },
  {
    id: 3,
    title: "Open Rack",
  },
  {
    id: 4,
    title: "Open Rack",
  },
  {
    id: 5,
    title: "Open Rack",
  },
];
type Props = {
  mainMenuOpen: boolean;
  animateMenu: () => void;
};

export default function Menu({ mainMenuOpen, animateMenu }: Props) {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(-1);
  const dropDownRef = React.useRef<HTMLDivElement>();
  const mainRef = React.useRef<HTMLDivElement>();
  return (
    <MenuWrapper
      style={{
        transform: mainMenuOpen ? "translateX(0)" : "translateX(-40em)",
      }}
    >
      <MenuLeft>
        <Title>
          <h1>Select a model</h1>
        </Title>
        <Main ref={mainRef}>
          <MainItemContainer>
            {models.map((model) => {
              const backgroundColor =
                model.id === 0 && sideMenuOpen ? "#EDEEEF" : undefined;
              return (
                <MainItem key={model.id} style={{ backgroundColor }}>
                  <MainItemFlex
                    style={{ backgroundColor }}
                    onClick={() => setSideMenuOpen(model.id)}
                  >
                    <span>{model.title}</span>
                  </MainItemFlex>
                </MainItem>
              );
            })}
          </MainItemContainer>
          <DropDown ref={dropDownRef}>
            <span>ARROWHEAD POOLS</span>
            <span>ARROWHEAD POOLS</span>
            <span>ARROWHEAD POOLS</span>
          </DropDown>
        </Main>
      </MenuLeft>
      <MenuHandle onClick={animateMenu}>
        <img
          src={`./assets/menu/${mainMenuOpen ? "close" : "model-list"}.png`}
          alt="Close"
        />
      </MenuHandle>
    </MenuWrapper>
  );
}
