import React from "react";
import Switch from "./Switch";
import styled from "styled-components";

function Heading() {
  return (
    <Wrapper>
      <h1>calc</h1>
      <Switch />
    </Wrapper>
  );
}

export default Heading;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.headerColor};
`;
