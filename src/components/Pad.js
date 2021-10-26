import React from "react";
import Row from "./Row";
import styled from "styled-components";
function Pad() {
  const squareKeys = [
    ["7", "8", "9", "DEL"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    [".", "0", "/", "x"],
  ];
  const rectKeys = ["RESET", "="];

  return (
    <PadWrapper>
      {squareKeys.map((keys) => (
        <Row key={Math.random().toString()} buttons={keys} square={true} />
      ))}
      <Row buttons={rectKeys} square={false} />
    </PadWrapper>
  );
}

const PadWrapper = styled.div`
  height: 380px;
  width: 428px;
  background-color: ${({ theme }) => theme.padBackgroundColor};
  border-radius: 8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 90vw;
    height: ;
  }
`;
export default Pad;
