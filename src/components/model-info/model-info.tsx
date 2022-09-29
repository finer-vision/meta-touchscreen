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
            <span>&times;</span>
          </ModelInfoClose>
        </ModelInfoHeader>
        <ModelInfoBody>
          <p>{description}</p>
          <img src={image} alt="" />
        </ModelInfoBody>
      </ModelInfoContainer>
    </ModelInfoWrapper>
  );
}
