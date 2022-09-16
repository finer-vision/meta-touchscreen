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
    title: "OPEN RACK v3",
    image: "./assets/images/open-rack.png",
    dropDowns: [
      { title: "POWER SHELF", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT", image: "./assets/images/sp_iso.png" },
    ],
  },
  {
    id: 1,
    title: "NOAH'S ARK",
    image: "./assets/images/noah-ark.png",
    dropDowns: [
      { title: "RPU", image: "./assets/images/ap_iso.png" },
      { title: "TTV", image: "./assets/images/sp_iso.png" },
    ],
  },
  {
    id: 2,
    title: "BLIND MATE INTERFACES",
    image: "./assets/images/blind-mate.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 2", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 3,
    title: "LIQUID COOLING CART",
    image: "./assets/images/liquid-coolant.png",
    dropDowns: [
      { title: "RACK ADAPTER", image: "./assets/images/ap_iso.png" },
      { title: "MODULE", image: "./assets/images/sp_iso.png" },
    ],
  },
  {
    id: 4,
    title: "WEDGE 400C",
    image: "./assets/images/wedge-400c.png",
    dropDowns: [
      { title: "RACK ADAPTER", image: "./assets/images/ap_iso.png" },
      { title: "MODULE", image: "./assets/images/sp_iso.png" },
    ],
  },
  {
    id: 5,
    title: "MINIPACK2",
    image: "./assets/images/minipack2.png",
    dropDowns: [
      { title: "LINE CARD EJECTOR", image: "./assets/images/ap_iso.png" },
      { title: "CHASSIS", image: "./assets/images/sp_iso.png" }
    ],
  },
  {
    id: 6,
    title: "GRAND CANYON",
    image: "./assets/images/grand-canyon.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 7,
    title: "GRAND TETON",
    image: "./assets/images/grand-tenton.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 8,
    title: "GLACIER POINT",
    image: "./assets/images/glacier-point.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 6", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT 6", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK 6", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 9,
    title: "DISCOVERY POINT",
    image: "./assets/images/discovery-point.png",
    dropDowns: [
      { title: "ARROWHEAD POOLS 6", image: "./assets/images/ap_iso.png" },
      { title: "STORM POINT 6", image: "./assets/images/sp_iso.png" },
      { title: "CASCADE CREEK 6", image: "./assets/images/cc_iso.png" },
    ],
  },
  {
    id: 10,
    title: "KINGS CANYON",
    image: "./assets/images/king-canyon.png",
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

  console.log(sideMenuOpen)

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
            {activeModels?.map((model, index) => {
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
