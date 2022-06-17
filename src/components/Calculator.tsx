import React, {useState} from "react";
import {evaluate} from "mathjs";
import {operatorType, operandsType} from "../types";
import Heading from "./Heading";
import Display from "./Display";
import Pad from "./Pad";
import styled from "styled-components";
import {device} from "../styles/devices";

const Calculator = () => {
  const [operands, setOperands] = useState<operandsType>({
    firstOperand: "0",
    secondOperand: "0",
  });
  const [operator, setOperator] = useState<operatorType>("");
  const [isFlashing, setIsFlashing] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  //function to handle too big or too small numbers
  const tooBigOrTooSmall = (msg: string) => {
    setOperands({firstOperand: msg, secondOperand: "0"});
    setIsShaking(true);
    setTimeout(() => {
      setOperands({
        firstOperand: "0",
        secondOperand: "0",
      });
      setIsShaking(false);
    }, 2000);
  };

  const calculateExpression = () => {
    console.log(`${operands.firstOperand}${operator}${operands.secondOperand}`);
    const result = evaluate(
      `${operands.firstOperand}${operator}${operands.secondOperand}`
    );
    let stringResult = result.toString();
    //handle NaN
    if (stringResult === "NaN") {
      setOperands({
        firstOperand: "0",
        secondOperand: "0",
      });

      //handle 1/0
    } else if (result === Infinity) {
      setOperands({
        firstOperand: "Infinity",
        secondOperand: "0",
      });
      setTimeout(() => {
        setOperands({
          firstOperand: "0",
          secondOperand: "0",
        });
      }, 2000);
      //check for interger overflow
    } else if (result > 999999999999) {
      tooBigOrTooSmall("TOO BIG!");
      //check for interger underflow
    } else if (Math.abs(result) < 0.0000000001) {
      tooBigOrTooSmall("t o o  s m a l l...");
      //check if decimal number is too many digits
    } else if (stringResult.indexOf(".") !== -1 && stringResult.length > 12) {
      {
        setOperands({
          firstOperand: "some precision lost...",
          secondOperand: "0",
        });

        stringResult = stringResult.slice(0, 12);
        setTimeout(() => {
          setOperands({
            firstOperand: stringResult,
            secondOperand: "0",
          });
        }, 1000);
      }
      //all other numbers....
    } else {
      setOperands({
        firstOperand: result,
        secondOperand: "0",
      });
    }
    //animate display and reset operator
    setIsEnlarged(true);
    setTimeout(() => {
      setIsEnlarged(false);
    }, 300);
    setOperator("");
  };

  const handleOperator = (operator: operatorType) => {
    operator = operator === "x" ? "*" : operator;
    setOperator(operator);
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
    }, 100);
  };

  const reset = () => {
    setOperands({firstOperand: "0", secondOperand: "0"});
    setOperator("");
  };

  const del = () => {
    const operandToDelete =
      operator.length > 0 ? "secondOperand" : "firstOperand";
    const updatedOperand =
      operands[operandToDelete].length === 1
        ? "0"
        : operands[operandToDelete].slice(0, -1);
    setOperands((prev) => {
      const newObj = {...prev};
      newObj[operandToDelete] = updatedOperand;
      return newObj;
    });
  };

  const addToOperand = (char: string) => {
    const operandToAddTo =
      operator.length > 0 ? "secondOperand" : "firstOperand";
    if (char === ".") {
      const operand = operands[operandToAddTo];
      if (operand.indexOf(".") === -1 && operand.length < 11) {
        setOperands((prev) => {
          const newObj = {...prev};
          const tempValue = newObj[operandToAddTo];
          newObj[operandToAddTo] = tempValue + char;
          return newObj;
        });
      }
    } else if (operands[operandToAddTo] === "0") {
      setOperands((prev) => {
        const newObj = {...prev};
        newObj[operandToAddTo] = char;
        return newObj;
      });
    } else {
      setOperands((prev) => {
        const newObj = {...prev};
        const tempValue = newObj[operandToAddTo];
        newObj[operandToAddTo] = tempValue + char;
        return newObj;
      });
    }
  };
  return (
    <CalculatorWrapper isShaking={isShaking}>
      <Heading />
      <Display
        operands={operands}
        operator={operator}
        flash={isFlashing}
        isEnlarged={isEnlarged}
      />
      <Pad
        del={del}
        reset={reset}
        handleOperator={handleOperator}
        addToOperand={addToOperand}
        operands={operands}
        operator={operator}
        calculateExpression={calculateExpression}
      />
    </CalculatorWrapper>
  );
};

const CalculatorWrapper = styled.div<{isShaking: boolean}>`
  width: 328px;
  animation-name: ${(props) => (props.isShaking ? "shake" : "none")};
  animation-duration: 0.3s;
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(0px, -1px) rotate(-1deg);
    }
    20% {
      transform: translate(-1px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(1px, 0px) rotate(0deg);
    }
    40% {
      transform: translate(0px, 0px) rotate(1deg);
    }
    50% {
      transform: translate(0px, 1px) rotate(-1deg);
    }
    60% {
      transform: translate(-1px, 0px) rotate(0deg);
    }
    70% {
      transform: translate(1px, 0px) rotate(-1deg);
    }
    80% {
      transform: translate(0px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(-1px, 0px) rotate(0deg);
    }
    100% {
      transform: translate(0px, -1px) rotate(-1deg);
    }
  }
  @media screen and ${device.tablet} {
    width: 428px;
  }
`;

export default Calculator;
