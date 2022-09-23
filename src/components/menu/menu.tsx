import React from "react";
import { chunk } from "lodash";
import {
  Arrow,
  Dot,
  DotContainer,
  DropDown,
  DropDownItemFlex,
  Main,
  MainItem,
  MainItemContainer,
  MainItemFlex,
  MenuHandle,
  MenuLeft,
  MenuWrapper,
  ModelPreview,
  NavWrapper,
  Next,
  Prev,
  Title,
} from "@/components/menu/menu.styles";
import models from "@/config/models";
import { appState } from "@/state/app-state";

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
                      appState
                        .getState()
                        .setSelectedModel({ model, component: null });
                      setSideMenuOpen((prevState) =>
                        prevState === index ? -1 : index
                      );
                    }}
                  >
                    <ModelPreview
                      src={`./assets/models/${model.id}/${model.id}.png`}
                      alt={model.title}
                    />
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
                  {model.components.map((component, index) => {
                    return (
                      <DropDownItemFlex
                        key={index}
                        onClick={() => {
                          appState
                            .getState()
                            .setSelectedModel({ model, component });
                        }}
                      >
                        <img
                          src={`./assets/models/${model.id}/${component.id}.png`}
                          alt={model.title}
                        />
                        <span>{component.title}</span>;
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
