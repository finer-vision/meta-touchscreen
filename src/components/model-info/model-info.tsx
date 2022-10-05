import React from "react";
import {
  ModelInfoBody,
  ModelInfoClose,
  ModelInfoContainer,
  ModelInfoHeader,
  ModelInfoWrapper,
} from "@/components/model-info/model-info.styles";

type Props = {
  image: string;
  title: string;
  description: string;
  onClose: () => void;
};

export default function ModelInfo({
  image,
  title,
  description,
  onClose,
}: Props) {
  return (
    <ModelInfoWrapper>
      <ModelInfoContainer>
        <ModelInfoHeader>
          <h3>{title}</h3>
          <ModelInfoClose onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </ModelInfoClose>
        </ModelInfoHeader>
        <ModelInfoBody>
          <p>{description}</p>
        </ModelInfoBody>
      </ModelInfoContainer>
    </ModelInfoWrapper>
  );
}
