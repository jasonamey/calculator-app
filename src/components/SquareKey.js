import React from "react";
import styled from "styled-components";
import { useAppContext } from "../store/context";

function SquareKey({ character }) {
  const {
    readyForDecimal,
    addToDigit,
    addToExpression,
    deleteCharacter,
    addDecimal,
  } = useAppContext();

  const deleteKey = character === "DEL";
  const decimalKey = character === ".";

  if (!deleteKey && !decimalKey) {
    const squareFunction = "x/+-".includes(character)
      ? addToExpression
      : addToDigit;

    return (
      <SquareKeyWrapper onClick={() => squareFunction(character)}>
        {character}
      </SquareKeyWrapper>
    );
  } else if (deleteKey) {
    return (
      <DeleteKeyWrapper onClick={() => deleteCharacter()}>
        <span className="delete-btn"> {character}</span>
      </DeleteKeyWrapper>
    );
  } else {
    return (
      <SquareKeyWrapper
        onClick={() => addDecimal()}
        disabled={!readyForDecimal}
      >
        {character}
      </SquareKeyWrapper>
    );
  }
}

const SquareKeyWrapper = styled.button`
  font-size: 26px;
  font-family: "Spartan", sans-serif;
  height: 48px;
  width: 80px;
  line-height: 56px;
  color: ${({ theme }) => theme.squareKeyColor};
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.squareKeyBackgroundColor};
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.squareKeyShadow};
  cursor: pointer;

  @media (max-width: 500px) {
    width: 22%;
    height: 100%;
    padding-top: 0.2em;
    border-radius: 6px;
  }
`;

const DeleteKeyWrapper = styled.button`
  font-size: 16px;
  font-family: "Spartan", sans-serif;
  line-height: 56px;
  width: 80px;
  height: 48px;
  border: none;
  border-radius: 8px;
  padding: 0px;
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.deleteKeyShadow};
  color: ${({ theme }) => theme.deleteKeyColor};
  background-color: ${({ theme }) => theme.deleteKeyBackgroundColor};
  cursor: pointer;
  @media (max-width: 500px) {
    width: 23%;
    height: 100%;
    padding-top: 0.2em;
    border-radius: 6px;
  }
`;

export default SquareKey;
