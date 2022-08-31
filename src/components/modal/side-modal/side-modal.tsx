import React from "react";
import {
  SideModalWrapper,
  SideModalClose,
} from "@/components/modal/side-modal/side-modal.styles";

type SideModalProps = {
  open?: boolean;
  onClose: () => void;
  children?: any;
};

export const SideModal = ({ open, onClose, children }: SideModalProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
	  if (open === undefined) return
    const wrapper = wrapperRef.current;

    if (wrapper === null) return;

    wrapper.style.animationName = open
      ? "side-modal-slide-in"
      : "side-modal-slide-out";
  }, [open]);

  return (
    <SideModalWrapper ref={wrapperRef}>
      {children}
      <SideModalClose onClick={onClose}>
        <img src="./assets/close.svg" />
      </SideModalClose>
    </SideModalWrapper>
  );
};
