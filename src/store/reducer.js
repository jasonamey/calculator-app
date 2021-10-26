import { evaluate } from "mathjs";

import {
  DISABLE_DECIMAL,
  SET_DIGIT,
  SET_EXPRESSION,
  CHECK_EXPRESSION,
  EXECUTE_EXPRESSION,
  DELETE_CHARACTER,
  RESET,
  SET_THEME_IDX,
} from "../utils/constants";

const limitToFifteenCharacters = (str) => {
  return str.slice(0, 15);
};

const reducer = (state, action) => {
  let newDigit, newExpression;

  switch (action.type) {
    case SET_DIGIT:
      if (state.displayIsEmpty || state.digit === "0") {
        return { ...state, displayIsEmpty: false, digit: action.payload };
      } else {
        newDigit = state.digit + action.payload;
        return { ...state, digit: newDigit };
      }

    case CHECK_EXPRESSION:
      return { ...state, expressionIsValid: true };
    case DISABLE_DECIMAL:
      if (state.displayIsEmpty) {
        newDigit = "0.";
        return {
          ...state,
          displayIsEmpty: false,
          readyForDecimal: false,
          digit: newDigit,
        };
      } else {
        newDigit = state.digit + ".";
        return { ...state, digit: newDigit, readyForDecimal: false };
      }

    case DELETE_CHARACTER: {
      if (state.digit === 0) {
        return { ...state, readyForDecimal: true };
      } else if (state.digit.length === 1) {
        return {
          ...state,
          displayIsEmpty: true,
          digit: "0",
          readyForDecimal: true,
        };
      } else {
        newDigit = state.digit.slice(0, state.digit.length - 1);
        return { ...state, digit: newDigit, displayIsEmpty: true };
      }
    }
    case EXECUTE_EXPRESSION:
      newDigit = evaluate(state.expression + state.digit) + "";
      return { ...state, digit: limitToFifteenCharacters(newDigit) };

    case SET_EXPRESSION:
      newExpression = state.digit + action.payload;
      return {
        ...state,
        readyForAdditionaloperand: "*/+-".includes(action.payload),
        expression: newExpression,
        expressionValid: true,
        digit: "0",
        displayIsEmpty: true,
      };
    case RESET:
      return {
        ...state,
        digit: "0",
        readyForDecimal: true,
        expression: "",
        expressionIsValid: false,
        numsAreDisabled: false,
        readyForAdditionalOperand: false,
        displayIsEmpty: true,
      };
    case SET_THEME_IDX:
      return {
        ...state,
        themeIdx: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
