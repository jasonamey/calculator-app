import React from "react";
import CalculatorKey from "./CalculatorKey";
import {operatorType, operandsType} from "../types";
import styled from "styled-components";
import {device} from "../styles/devices";

interface IPadProps {
  del: () => void;
  reset: () => void;
  handleOperator: (operator: operatorType) => void;
  addToOperand: (char: string) => void;
  calculateExpression: () => void;
  operands: operandsType;
  operator: operatorType;
}

const Pad = ({
  del,
  reset,
  handleOperator,
  addToOperand,
  calculateExpression,
  operands,
  operator,
}: IPadProps) => {
  const calculatorKeys = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "RESET",
    "=",
  ];

  //function to return whether the key should be disabled, and the keys function
  function isKeyDisabledAndKeyFunction(
    key: string,
    curOperand: string,
    curOperator: operatorType
  ): [boolean, Function] {
    if ("1234567890.".indexOf(key) !== -1) {
      return [curOperand.length > 11, addToOperand];
    }
    if ("x+-/".indexOf(key) !== -1) {
      return [false, handleOperator];
    }
    if (key === "DEL") {
      return [curOperand === "0", del];
    }
    if (key === "RESET") {
      return [false, reset];
    }
    return [curOperator !== "", calculateExpression];
  }

  return (
    <PadWrapper>
      {calculatorKeys.map((item, i) => {
        //find what operand is currently active : first or second ?
        const curOperand =
          operator !== "" ? operands.secondOperand : operands.firstOperand;
        //return if key should be disabled, if not, what fuction that key performs
        const [isDisabled, keyFunction] = isKeyDisabledAndKeyFunction(
          item,
          curOperand,
          operator
        );

        return (
          <CalculatorKey
            key={i}
            item={item}
            isDisabled={isDisabled}
            keyFunction={keyFunction}
          />
        );
      })}
    </PadWrapper>
  );
};

const PadWrapper = styled.section`
  display: grid;
  grid-gap: 16px;
  padding: 8px 8px 10px 8px;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 8px;
  transition: all 0.5s linear;
  background-color: ${(props) => props.theme.padBackgroundColor};
  @media screen and ${device.mobileM} {
    padding: 22px;
  }
  @media screen and ${device.tablet} {
    grid-gap: 20px;
  }
`;

export default Pad;
