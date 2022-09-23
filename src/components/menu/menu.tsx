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
import models from "@/config/models";

type Props = {
  mainMenuOpen: boolean;
  animateMenu: () => void;
  onChange: (modelId: string) => void;
};

export default function Menu({ mainMenuOpen, animateMenu, onChange }: Props) {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(-1);
  const [activePage, setActivePage] = React.useState(0);

  const chunkedModel = React.useMemo(() => {
    return chunk(models, 7);
  }, [models]);

  const totalPages = React.useMemo(() => {
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
            {activeModels.map((model, index) => {
              const backgroundColor =
                index === sideMenuOpen ? "#DDDEE0" : undefined;
              return (
                <MainItem key={model.id} style={{ backgroundColor }}>
                  <MainItemFlex
                    style={{ backgroundColor }}
                    onClick={() => {
                      setSideMenuOpen((prevState) =>
                        prevState === index ? -1 : index
                      );
                    }}
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
              const firstOffset = sideMenuOpen * 16.5 + 2;
              const secondOffset = (sideMenuOpen - 1) * 16.5 + 1.8;
              const thirdOffset = (sideMenuOpen - 1) * 16.5 + 2.05;
              const lastOffset = (sideMenuOpen - 1) * 16.5 - 14.6;
              let top =
                sideMenuOpen === 2
                  ? `${thirdOffset}em`
                  : sideMenuOpen < 2
                  ? `${firstOffset}em`
                  : sideMenuOpen === activeModels.length - 1
                  ? `${lastOffset}em`
                  : `${secondOffset}em`;

              return (
                <DropDown
                  style={{ top }}
                  key={model.id}
                  open={sideMenuOpen === index}
                >
                  {model.dropDowns.map((dropDown, index) => {
                    return (
                      <DropDownItemFlex
                        key={index}
                        onClick={() => onChange(`${model.id}-${dropDown.id}`)}
                      >
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
