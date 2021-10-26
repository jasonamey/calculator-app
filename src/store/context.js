import React, { useContext, useReducer } from "react";
import {
  DISABLE_DECIMAL,
  SET_DIGIT,
  SET_EXPRESSION,
  EXECUTE_EXPRESSION,
  DELETE_CHARACTER,
  CHECK_EXPRESSION,
  RESET,
  SET_THEME_IDX,
} from "../utils/constants";
import reducer from "./reducer";

const initialState = {
  digit: "0",
  readyForDecimal: true,
  expression: "",
  expressionIsValid: false,
  numsAreDisabled: false,
  readyForAdditionalOperand: false,
  displayIsEmpty: true,
  themeIdx: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToDigit = (num) => {
    dispatch({ type: SET_DIGIT, payload: num });
  };

  const addToExpression = (char) => {
    if (char === "x") {
      char = "*";
    }
    dispatch({ type: CHECK_EXPRESSION });
    dispatch({ type: SET_EXPRESSION, payload: char });
  };
  const deleteCharacter = () => {
    dispatch({ type: DELETE_CHARACTER });
    dispatch({ type: CHECK_EXPRESSION });
  };
  const addDecimal = () => {
    console.log("in here");
    dispatch({ type: DISABLE_DECIMAL, payload: false });
    dispatch({ type: CHECK_EXPRESSION });
  };

  const getAnswer = () => {
    dispatch({ type: EXECUTE_EXPRESSION });
  };

  const resetCalculator = () => {
    dispatch({ type: RESET });
  };

  const setThemeIdx = (idx) => {
    dispatch({ type: SET_THEME_IDX, payload: idx });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToDigit,
        addToExpression,
        deleteCharacter,
        addDecimal,
        getAnswer,
        resetCalculator,
        setThemeIdx,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
