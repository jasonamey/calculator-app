import React from "react";
import styled from "styled-components";
import { useAppContext } from "../store/context";
function RectangleKey(props) {
  const { getAnswer, resetCalculator } = useAppContext();
  const orange = props.calcAction === "=";
  if (orange) {
    return (
      <RectangleEqualsKeyWrapper onClick={getAnswer}>
        {props.calcAction}
      </RectangleEqualsKeyWrapper>
    );
  } else {
    return (
      <RectangleResetKeyWrapper onClick={resetCalculator}>
        {props.calcAction}
      </RectangleResetKeyWrapper>
    );
  }
}

const RectangleResetKeyWrapper = styled.button`
  background-color: ${({ theme }) => theme.resetKeyBackgroundColor};
  width: 180px;
  height: 48px;
  line-height: 56px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  color: ${({ theme }) => theme.resetKeyColor};
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.resetKeyShadow};
  @media (max-width: 500px) {
    width: 48%;
    height: 100%;
  }
`;

const RectangleEqualsKeyWrapper = styled.button`
  background-color: ${({ theme }) => theme.equalsKeyBackgroundColor};
  width: 180px;
  height: 48px;
  line-height: 56px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  color: ${({ theme }) => theme.equalsKeyColor};
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.equalsKeyShadow};
  @media (max-width: 500px) {
    width: 48%;
    height: 100%;
  }
`;

export default RectangleKey;
