import React from "react";
import styled from "styled-components";
import { useAppContext } from "../store/context";

function Switch() {
  const buttonHandler = (num) => {
    setThemeIdx(num);
  };
  const { setThemeIdx, themeIdx } = useAppContext();
  console.log("themeidx", themeIdx);
  return (
    <Wrapper>
      <div className="switch-box">
        <div className="number-label-box">
          <div className="number-labels">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </div>
        <div className="switch-toggle-box">
          <h4 className="switch-toggle-label">THEME</h4>
          <div className="switch-toggle">
            <span
              className={`button one ${themeIdx === 0 ? "show" : ""}`}
              onClick={() => buttonHandler(0)}
            ></span>
            <span
              className={`button two ${themeIdx === 1 ? "show" : ""}`}
              onClick={() => buttonHandler(1)}
            ></span>
            <span
              className={`button three ${themeIdx === 2 ? "show" : ""}`}
              onClick={() => buttonHandler(2)}
            ></span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  .switch-box {
    width: 108px;
  }
  .number-label-box {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 2px;
  }
  .number-labels {
    width: 50px;
    display: flex;
    justify-content: space-between;
    font-size: 9px;
    padding: 0 6px;
  }
  .switch-toggle-box {
    display: flex;
    align-items: center;
  }
  .switch-toggle-label {
    font-size: 9px;
    margin-right: 20px;
  }
  .switch-toggle {
    width: 54px;
    height: 20px;
    background-color: ${({ theme }) => theme.toggleBackgroundColor};
    border-radius: 10px;
    padding: 4px;
    display: float;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    display: float;
    justify-content: center;
    align-items: center;
    color: white;
    height: 12px;
    width: 12px;
    font-size: 7px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.toggleSwitchColor};
    opacity: 0;
    cursor: pointer;
    position: relative;
    transition: all 0s;
  }

  .show {
    opacity: 1;
  }
`;
export default Switch;
