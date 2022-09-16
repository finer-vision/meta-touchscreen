import React from "react";
import { chunk } from "lodash";
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
  Model,
  Arrow,
  NavWrapper,
  Prev,
  Next,
  DotContainer,
  Dot,
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

  {
    id: 7,
    title: "TTVT",
    image: "./assets/images/ttv.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 5", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT 5", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK 5", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 8,
    title: "GRAND TETONT",
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
  const [activePage, setActivePage] = React.useState(0);

  const chunkedModel = React.useMemo(() => {
    return chunk(models, 7);
  }, [models]);

  const totalPages = React.useMemo(() => {
    console.log(chunkedModel);
    return chunkedModel.length;
  }, [chunkedModel]);

  const activeModels = React.useMemo(() => {
    return chunkedModel[activePage];
  }, [activePage, chunkedModel]);

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
            {activeModels.map((model) => {
              const backgroundColor =
                model.id === sideMenuOpen ? "#DDDEE0" : undefined;
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
                    <Model src={model.image} alt={model.title} />
                    <span>{model.title}</span>
                    <Arrow src="./assets/images/arrow.png" alt="Arrow" />
                  </MainItemFlex>
                </MainItem>
              );
            })}
          </MainItemContainer>
          <NavWrapper>
            <Prev
              onClick={() => {
                setSideMenuOpen(-1);
                setActivePage((active) => Math.max(0, active - 1));
              }}
            >
              <img src="./assets/images/prev.svg" alt="Prev" />
            </Prev>
            <DotContainer>
              {Array.from({ length: totalPages }).map((_, idx) => {
                console.log(idx);
                return <Dot key={idx} active={idx === activePage} />;
              })}
            </DotContainer>
            <Next
              onClick={() => {
                setSideMenuOpen(-1);
                setActivePage((active) => Math.min(totalPages, active + 1));
              }}
            >
              <img src="./assets/images/next.svg" alt="Next" />
            </Next>
          </NavWrapper>
          <>
            {activeModels?.map((model) => {
              const firstOffset = (sideMenuOpen - 1) * 16.5 + 18.5;
              const secondOffset = (sideMenuOpen - 1) * 16.5 - 14.7;
              let top =
                sideMenuOpen < 1
                  ? "2em"
                  : sideMenuOpen < activeModels.length - 2
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
