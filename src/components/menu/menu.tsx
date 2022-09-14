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
  DropDownItemFlex,
} from "@/components/menu/menu.styles";

const models = [
  {
    id: 0,
    title: "OPEN RACK",
    image: "./assets/images/open-rack.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 1,
    title: "BBU",
    image: "./assets/images/bbu.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 1", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT 1", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK 1", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 2,
    title: "POWER SHELF",
    image: "./assets/images/power-shelf.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 2", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT 2", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK 2", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 3,
    title: "NOAH'S ARK",
    image: "./assets/images/noahs-ark.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 3", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT 3", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK 3", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 4,
    title: "RPU",
    image: "./assets/images/rpu.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 4", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT 4", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK 4", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 5,
    title: "TTV",
    image: "./assets/images/ttv.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 5", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT 5", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK 5", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 6,
    title: "GRAND TETON",
    image: "./assets/images/grand-teton.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 6", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT 6", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK 6", image: "./assets/images/cc_iso.png" },
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
                    <img src={model.image} alt={model.title} />
                    <span>{model.title}</span>
                  </MainItemFlex>
                </MainItem>
              );
            })}
          </MainItemContainer>
          <>
            {models?.map((model) => {
              const firstOffset = (sideMenuOpen - 1) * 16.5 + 18.5;
              const secondOffset = (sideMenuOpen - 1) * 16.5 - 14.7;
              let top =
                sideMenuOpen < 1
                  ? "2em"
                  : sideMenuOpen < models.length - 2
                  ? `${firstOffset}em`
                  : `${secondOffset}em`;

              return (
                <DropDown
                  style={{ top }}
                  key={model.id}
                  open={sideMenuOpen === model.id}
                >
                  {model.dropDowns.map((dropDown, index) => {
                    return (
                      <DropDownItemFlex key={index}>
                        <img src={dropDown.image} alt={model.title} />
                        <span>{dropDown.title}</span>;
                      </DropDownItemFlex>
                    );
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
