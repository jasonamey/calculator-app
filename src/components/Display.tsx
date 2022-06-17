import React from "react";
import styled from "styled-components";
import {operatorType, operandsType} from "../types";
import {device} from "../styles/devices";

interface IDisplayProps {
  operands: operandsType;
  operator: operatorType;
  flash: boolean;
  isEnlarged: boolean;
}

function Display({operands, operator, flash, isEnlarged}: IDisplayProps) {
  const {firstOperand, secondOperand} = operands;
  console.log("da op", firstOperand === "some precision lost...");
  return (
    <Wrapper flash={flash} isEnlarged={isEnlarged}>
      <h2
        className={
          firstOperand === "some precision lost..." ? "smaller-txt" : ""
        }
      >
        {operator === "" ? firstOperand : secondOperand}
      </h2>
    </Wrapper>
  );
}

export default Display;

const Wrapper = styled.div<{flash: boolean; isEnlarged: boolean}>`
  width: 100%;
  border-radius: 8px;
  background-color: ${({theme}) => theme.displayBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 26px;
  overflow: hidden;
  margin-bottom: 22px;
  animation-name: ${(props) =>
    props.flash ? "flash" : props.isEnlarged ? "enlarge" : "none"};
  animation-duration: ${(props) => (props.flash ? ".1s" : ".3s")};
  animation-timing-function: linear;
  h2 {
    background-color: ${({theme}) => theme.displayBackgroundColor};
    height: auto;
    text-align: right;
    font-size: 42px;
    color: ${({theme}) => theme.displayColor};
    trasition: none;

    &.smaller-txt {
      font-size: 30px;
      line-height: 1.4;
    }
  }
  @media screen and ${device.tablet} {
    &.smaller-txt {
      font-size: 42px;
    }
  }
  @keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }
    25%,
    75% {
      opacity: 0;
    }
  }
  @keyframes enlarge {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.025);
    }
    50% {
      transform: scale(1.05);
    }
    75% {
      transform: scale(1.025);
    }
    100% {
      transform: scale(1);
    }
  }
`;
