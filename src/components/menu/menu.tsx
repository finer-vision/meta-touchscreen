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
    dropDowns: [
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
    ],
  },
  {
    id: 1,
    title: "Open Rack",
    dropDowns: [
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
    ],
  },
  {
    id: 2,
    title: "Open Rack",
    dropDowns: [
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
    ],
  },
  {
    id: 3,
    title: "Open Rack",
    dropDowns: [
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
    ],
  },
  {
    id: 4,
    title: "Open Rack",
    dropDowns: [
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
    ],
  },
  {
    id: 5,
    title: "Open Rack",
    dropDowns: [
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
    ],
  },
  {
    id: 6,
    title: "Open Rack",
    dropDowns: [
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
      { title: "Arrowhead pools" },
    ],
  },
];
type Props = {
  mainMenuOpen: boolean;
  animateMenu: () => void;
};

export default function Menu({ mainMenuOpen, animateMenu }: Props) {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(-1);
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
        <Main open={sideMenuOpen > -1}>
          <MainItemContainer>
            {models.map((model) => {
              const backgroundColor =
                model.id === sideMenuOpen ? "#EDEEEF" : undefined;
              return (
                <MainItem key={model.id} style={{ backgroundColor }}>
                  <MainItemFlex
                    style={{ backgroundColor }}
                    onClick={() =>
                      setSideMenuOpen((prevState) =>
                        prevState === model.id ? -1 : model.id
                      )
                    }
                  >
                    <span>{model.title}</span>
                  </MainItemFlex>
                </MainItem>
              );
            })}
          </MainItemContainer>
          <>
            {models?.map((model) => {
              const top =
                sideMenuOpen > 5
                  ? `${50 + 10 * (sideMenuOpen - 5)}em`
                  : sideMenuOpen > 2
                  ? "45.5em"
                  : "2em";
              return (
                <DropDown
                  style={{ top }}
                  key={model.id}
                  open={sideMenuOpen === model.id}
                >
                  {model.dropDowns.map((dropDown, index) => {
                    return <span key={index}>{dropDown.title}</span>;
                  })}
                </DropDown>
              );
            })}
          </>
        </Main>
      </MenuLeft>
      <MenuHandle
        onClick={() => {
          setSideMenuOpen(-1);
          animateMenu();
        }}
      >
        <img
          src={`./assets/menu/${mainMenuOpen ? "close" : "model-list"}.png`}
          alt="Close"
        />
      </MenuHandle>
    </MenuWrapper>
  );
}
