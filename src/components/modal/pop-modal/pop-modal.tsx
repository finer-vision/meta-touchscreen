import React from "react";
import {
  PopModalWrapper,
  PopModalContainer,
  PopModalClose,
} from "@/components/modal/pop-modal/pop-modal.styles";

type PopModalProps = {
  open: boolean;
  onClose: () => void;
  children?: any;
};

export const PopModal = ({ open, onClose, children }: PopModalProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper === null) return;

    wrapper.style.animationName = open
      ? "side-modal-fade-in"
      : "side-modal-fade-out";
  }, [open]);

  return (
    <PopModalWrapper ref={wrapperRef}>
      <PopModalContainer>
        {children}
        <PopModalClose onClick={onClose}>
          <img src="./assets/close.svg" />
        </PopModalClose>
      </PopModalContainer>
    </PopModalWrapper>
  );
};
