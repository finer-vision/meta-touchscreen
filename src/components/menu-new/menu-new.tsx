import React from "react";
import chunk from "lodash/chunk";
import {
  MenuNewBackButton,
  MenuNewHeader,
  MenuNewList,
  MenuNewListDetails,
  MenuNewListItem,
  MenuNewMain,
  MenuNewMoreButton,
  MenuNewWrapper,
} from "@/components/menu-new/menu-new.styles";
import models from "@/config/models";
import MenuNewToggle from "@/components/menu-new/menu-new-toggle";
import MenuNewArrow from "@/components/menu-new/menu-new-arrow";
import { appState } from "@/state/app-state";
import { Model, ModelComponent } from "@/types";

type Props = {
  open: boolean;
  onOpen: (open: Props["open"]) => void;
  itemsPerPage?: number;
};

export default function MenuNew({ open, onOpen, itemsPerPage = 6 }: Props) {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [itemIndex, setItemIndex] = React.useState(-1);

  const pages = React.useMemo(() => {
    return chunk(models, itemsPerPage);
  }, [itemsPerPage]);

  const items = React.useMemo(() => {
    if (itemIndex === -1) {
      return pages[pageIndex];
    }
    const components = pages[pageIndex][itemIndex].components;
    return [pages[pageIndex][itemIndex], ...components];
  }, [pages, pageIndex, itemIndex]);

  const timeoutRef = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <MenuNewWrapper style={{ "--open": open ? 1 : 0 } as React.CSSProperties}>
      <MenuNewMain>
        <MenuNewHeader>
          <span>Select a model</span>
        </MenuNewHeader>
        <MenuNewList>
          {items.map((item, index) => {
            let model = pages[pageIndex][index];
            if (itemIndex > -1) {
              model = pages[pageIndex][itemIndex];
            }
            const id = model.id;
            return (
              <MenuNewListItem
                key={item.id}
                onClick={() => {
                  if (itemIndex === -1) {
                    return setItemIndex(index);
                  }
                  appState.getState().setSelectedModel(model);
                  if (index === 0) {
                    appState.getState().setModelInfo(null);
                    appState.getState().setSelectedModelComponent(null);
                  } else {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = setTimeout(() => {
                      appState
                        .getState()
                        .setSelectedModelComponent(item as ModelComponent);
                    }, 100);
                  }
                  onOpen(false);
                  setItemIndex(-1);
                }}
              >
                <MenuNewListDetails>
                  <img src={`./assets/models/${id}/${item.id}.png`} alt="" />
                  <span>{item.title}</span>
                </MenuNewListDetails>
                <MenuNewArrow />
              </MenuNewListItem>
            );
          })}
        </MenuNewList>
        {itemIndex === -1 ? (
          <MenuNewMoreButton
            className={pageIndex > 0 ? "back" : undefined}
            onClick={() => {
              setPageIndex((pageIndex) => {
                if (pageIndex === pages.length - 1) {
                  return pageIndex - 1;
                }
                return pageIndex + 1;
              });
            }}
          >
            <span>
              {items.length === itemsPerPage ? "More Models" : "Back"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
            >
              <circle cx="67" cy="67" r="67" fill="currentColor" />
              <path
                d="M39.2663 51.2626C40.075 50.4542 41.1717 50 42.3152 50C43.4588 50 44.5555 50.4542 45.3642 51.2626L66.7111 72.6095L88.0579 51.2626C88.8713 50.4771 89.9606 50.0424 91.0914 50.0522C92.2221 50.0621 93.3037 50.5156 94.1033 51.3152C94.9029 52.1147 95.3564 53.1964 95.3662 54.3271C95.376 55.4578 94.9414 56.5472 94.1558 57.3605L69.76 81.7563C68.9513 82.5648 67.8546 83.019 66.7111 83.019C65.5675 83.019 64.4708 82.5648 63.6621 81.7563L39.2663 57.3605C38.4578 56.5518 38.0037 55.4551 38.0037 54.3116C38.0037 53.1681 38.4578 52.0714 39.2663 51.2626Z"
                fill="#929292"
              />
            </svg>
          </MenuNewMoreButton>
        ) : (
          <></>
        )}
        {itemIndex > -1 ? (
          <MenuNewBackButton
            onClick={() => setItemIndex(-1)}
            width="134"
            height="134"
            viewBox="0 0 134 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="67" cy="67" r="67" fill="white" fillOpacity="0.45" />
            <path
              d="M79.1739 40.0556C79.9824 40.8643 80.4366 41.961 80.4366 43.1045C80.4366 44.2481 79.9824 45.3448 79.1739 46.1535L57.8271 67.5004L79.1739 88.8472C79.9595 89.6606 80.3942 90.7499 80.3843 91.8807C80.3745 93.0114 79.921 94.093 79.1214 94.8926C78.3218 95.6922 77.2402 96.1457 76.1095 96.1555C74.9788 96.1653 73.8894 95.7307 73.0761 94.9451L48.6802 70.5493C47.8718 69.7406 47.4176 68.6439 47.4176 67.5004C47.4176 66.3568 47.8718 65.2601 48.6802 64.4514L73.0761 40.0556C73.8848 39.2471 74.9815 38.793 76.125 38.793C77.2685 38.793 78.3652 39.2471 79.1739 40.0556Z"
              fill="#929292"
            />
          </MenuNewBackButton>
        ) : (
          <></>
        )}
      </MenuNewMain>
      <MenuNewToggle open={open} onClick={() => onOpen(!open)} />
    </MenuNewWrapper>
  );
}
