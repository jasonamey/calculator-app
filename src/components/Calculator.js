import React from "react";
import Display from "./Display";
import Pad from "./Pad";
import Heading from "./Heading";
import styled from "styled-components";

function Calculator() {
  return (
    <Wrapper>
      <Heading />
      <Display />
      <Pad />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 560px;
  width: 428px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Spartan", sans-serif;
  @media screen and (max-width: 500px) {
    width: 90vw;
  }
`;

export default Calculator;
