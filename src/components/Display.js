import React from "react";
import styled from "styled-components";
import { useAppContext } from "../store/context";

function Display() {
  const { digit } = useAppContext();

  return (
    <Wrapper>
      <input type="text" className="number-display" placeholder={digit} />
    </Wrapper>
  );
}

export default Display;

const Wrapper = styled.div`
  width: 428px;
  height: 102px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.displayBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 26px;
  overflow: hidden;

  input.number-display {
    background-color: ${({ theme }) => theme.displayBackgroundColor};
    height: auto;
    text-align: right;
    border: none;
    font-size: 38px;
    font-family: inherit;
    color: ${({ theme }) => theme.displayColor};
    outline: none;
  }

  input.number-display::placeholder {
    color: ${({ theme }) => theme.displayColor};
  }
  @media screen and (max-width: 500px) {
  
      width: 90vw;
      height: 90px;
      font-size: 34px;
    

`;
