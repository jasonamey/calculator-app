export type themeType = {
  mainBackgroundColor: string;
  padBackgroundColor: string;
  displayBackgroundColor: string;
  displayColor: string;
  headerColor: string;
  toggleBackgroundColor: string;
  toggleSwitchColor: string;
  squareKeyBackgroundColor: string;
  squareKeyShadow: string;
  squareKeyColor: string;
  deleteKeyBackgroundColor: string;
  deleteKeyShadow: string;
  deleteKeyColor: string;
  resetKeyBackgroundColor: string;
  resetKeyShadow: string;
  resetKeyColor: string;
  equalsKeyBackgroundColor: string;
  equalsKeyShadow: string;
  equalsKeyColor: string;
};

export type operatorType = "/" | "x" | "+" | "-" | "" | "*";

export type operandsType = {
  firstOperand: string;
  secondOperand: string;
};
