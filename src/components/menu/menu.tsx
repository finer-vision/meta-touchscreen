import React, { useEffect } from "react";
import { chunk } from "lodash";
import {
  Arrow,
  Dot,
  DotContainer,
  DropDown,
  DropDownImage,
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
import { useAnimationControls } from "framer-motion";

type Props = {
  mainMenuOpen: boolean;
  animateMenu: () => void;
};

export default function Menu({ mainMenuOpen, animateMenu }: Props) {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(-1);
  const [page, setPage] = React.useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    if(mainMenuOpen) {
      controls.set(() => ({
        opacity: 0
      }))
      controls.start(i => ({
        opacity: 1,
        transition: { delay: i * 0.2 },
      }))
    }
  }, [mainMenuOpen, page])

  const modelsPages = React.useMemo(() => {
    return chunk(models, 7);
  }, [models]);

  const totalPages = React.useMemo(() => {
    return modelsPages.length;
  }, [modelsPages]);

  const modelsInPage = React.useMemo(() => {
    return modelsPages[page] ?? [];
  }, [page, modelsPages]);

  return (
    <MenuWrapper
      style={{
        transform: mainMenuOpen ? "translateX(0)" : "translateX(calc(-27.275em*.8))",
      }}
    >
      <MenuLeft>
        <Title>
          <h1>Select a model</h1>
        </Title>
        <Main open={sideMenuOpen > -1}>
          <MainItemContainer>
            {modelsInPage.map((model, index) => {
              const backgroundColor =
                index === sideMenuOpen ? "#DDDEE0" : undefined;
              return (
                <MainItem 
                animate={controls}
                custom={index}
                key={model.id} style={{ backgroundColor }}>
                  <MainItemFlex
                    style={{ backgroundColor }}
                    onClick={() => {
                      if (model.components.length > 0) {
                        setSideMenuOpen((prevState) => {
                          return prevState === index ? -1 : index;
                        });
                      } else {
                        appState.getState().setSelectedModel(model);
                        setSideMenuOpen(-1);
                        animateMenu();
                      }
                    }}
                  >
                    <div>
                      <ModelPreview
                        src={`./assets/models/${model.id}/${model.id}.png`}
                        alt={model.title}
                      />
                    </div>
                    <span>{model.title}</span>
                    <Arrow style={{ opacity: model.components.length > 0 ? 1 : 0 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </Arrow>
                  </MainItemFlex>
                </MainItem>
              );
            })}
          </MainItemContainer>
          <NavWrapper>
            <Prev
              style={{
                visibility: page > 0 ? "visible" : "hidden"
              }}
              onClick={() => {
                setSideMenuOpen(-1);
                setPage((active) => Math.max(0, active - 1));
              }}
            >
              <img src="./assets/images/prev.svg" alt="Prev" />
            </Prev>
            <DotContainer>
              {Array.from({ length: totalPages }).map((_, idx) => {
                return <Dot key={idx} active={idx === page} />;
              })}
            </DotContainer>
            {sideMenuOpen}
            <Next
              style={{
                visibility: page < 1 ? "visible" : "hidden"
              }}
              onClick={() => {
                setSideMenuOpen(-1);
                setPage((active) => Math.min(totalPages-1, active + 1));
              }}
            >
              <img src="./assets/images/next.svg" alt="Next" />
            </Next>
          </NavWrapper>
          <>
            {modelsInPage.map((model, index) => {
                const top = (() => {
                  switch(sideMenuOpen) {
                    default:
                      return `1em`;
                    case 1: 
                      return `6.4em`; 
                    case 2: 
                      return `11.7em`;
                    case 3: 
                      return `15em`; 
                    case 4: 
                      return `22.4em`; 
                    case 5: 
                      return `18.75em`; 
                  }
                })()
              return (
                <DropDown
                  style={{ top }}
                  key={model.id}
                  open={sideMenuOpen === index}
                >
                  <DropDownItemFlex
                    onClick={() => {
                      appState.getState().setSelectedModel(model);
                      setSideMenuOpen(-1);
                      animateMenu();
                    }}
                  >
                    <DropDownImage>
                      <img src={`./assets/models/${model.id}/${model.id}.png`}/>
                    </DropDownImage>
                    <span>{model.title}</span>
                  </DropDownItemFlex>
                  {model.components.map((component, index) => {
                    return (
                      <DropDownItemFlex
                        key={index}
                        onClick={() => {
                          appState
                            .getState()
                            .setSelectedModel(model)

                          setTimeout(() => {
                            appState
                              .getState()
                              .setSelectedModelComponent(component);
                            setSideMenuOpen(-1);
                            animateMenu();
                          }, 100);
                        }}
                      >
                          <DropDownImage id={component.id}>
                            <img src={`./assets/models/${model.id}/${component.id}.png`}/>
                          </DropDownImage>
                          <span>{component.title}</span>
                      </DropDownItemFlex>
                    );
                  })}
                </DropDown>
              );
            })}
          </>
        </Main>
      </MenuLeft>
      {!appState((state) => state.modelInfo) && <MenuHandle
        onClick={() => {
          setSideMenuOpen(-1);
          animateMenu();
        }}
      >
        <div>
          {mainMenuOpen
            ? <>
              <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span id="close-text">Close</span>
            </>
            : <>
            <svg id="open-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
            <span id="open-text">Model List</span>
          </>}
        </div>
      </MenuHandle>}
    </MenuWrapper>
  );
}
