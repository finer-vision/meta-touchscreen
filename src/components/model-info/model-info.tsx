import React from "react";
import {
  ModelInfoBody,
  ModelInfoClose,
  ModelInfoContainer,
  ModelInfoHeader,
  ModelInfoWrapper,
} from "@/components/model-info/model-info.styles";
import { AnimatePresence } from "framer-motion";

type Props = {
  title: string;
  description: string;
  show: boolean;
  onClose?: () => void;
};

export default function ModelInfo({
  title,
  description,
  show,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {show && (
        <ModelInfoWrapper>
          <ModelInfoContainer>
            <ModelInfoHeader>
              <h3>{title}</h3>
              <ModelInfoClose onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.9"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </ModelInfoClose>
            </ModelInfoHeader>
            <ModelInfoBody>
              <p>{description}</p>
            </ModelInfoBody>
          </ModelInfoContainer>
        </ModelInfoWrapper>
      )}
    </AnimatePresence>
  );
}
