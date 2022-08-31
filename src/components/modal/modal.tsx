import React from "react";
import ReactDOM from "react-dom";
import { Backdrop, ModalOverLay } from "@/components/modal/modal.styles";

const portalElement = document.getElementById("overlay-root");

type OverLayComponentProps = {
  open: boolean;
  onClose: () => void;
  children?: any;
};

export const Modal = ({ open, onClose, children }: OverLayComponentProps) => {
  const backdropRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper === null) return;

    function onAnimationEnd(event: AnimationEvent) {
      if (event.animationName === "side-modal-slide-out") {
        setMounted(false);
      }
    }

    wrapper.addEventListener("animationend", onAnimationEnd);
    return () => {
      wrapper.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  React.useEffect(() => {
    const backdrop = backdropRef.current;
    const wrapper = wrapperRef.current;

    if (backdrop === null || wrapper === null) return;

    backdrop.style.animationName = open
      ? "side-modal-fade-in"
      : "side-modal-fade-out";
    wrapper.style.animationName = open
      ? "side-modal-slide-in"
      : "side-modal-slide-out";

    if (open) {
      setMounted(true);
    }
  }, [open]);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} ref={backdropRef} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay ref={wrapperRef}>
          <div className="content">{mounted && children}</div>
        </ModalOverLay>,
        portalElement
      )}
    </>
  );
};
