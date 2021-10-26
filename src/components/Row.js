import React from "react";
import SquareKey from "./SquareKey";
import RectangleKey from "./RectangleKey";
import styled from "styled-components";
const Row = ({ buttons, square }) => {
  const rowContent = buttons.map((button) => {
    if (square) {
      return <SquareKey character={button} key={Math.random().toString()} />;
    } else {
      return (
        <RectangleKey calcAction={button} key={Math.random().toString()} />
      );
    }
  });

  return <RowWrapper>{rowContent}</RowWrapper>;
};

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 16%;
`;

export default Row;
