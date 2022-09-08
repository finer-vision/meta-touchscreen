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
import emitter from "@/services/emitter";
import { Subscription } from "@/types";

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
  return (
    <MenuWrapper
      style={{
        transform: mainMenuOpen ? "translateX(0)" : "translateX(-80em)",
      }}
    >
      <MenuLeft>
        <Title>
          <h1>Select a model</h1>
        </Title>
        <Main>
          <MainItemContainer>
            {models.map((model, index) => {
              const backgroundColor = index === 0 ? "#EDEEEF" : undefined;
              return (
                <MainItem key={model.id} style={{ backgroundColor }}>
                  <MainItemFlex style={{ backgroundColor }}>
                    <span>{model.title}</span>
                  </MainItemFlex>
                </MainItem>
              );
            })}
          </MainItemContainer>
          <DropDown>
            <span>ARROWHEAD POOLS</span>
            <span>ARROWHEAD POOLS</span>
            <span>ARROWHEAD POOLS</span>
          </DropDown>
        </Main>
      </MenuLeft>
      <MenuHandle onClick={animateMenu}>
        <img src="./assets/menu/model-list.png" alt="Close" />
      </MenuHandle>
    </MenuWrapper>
  );
}
