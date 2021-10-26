import "./App.css";
import Calculator from "./components/Calculator";
import themes from "./styles/Themes";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { useAppContext } from "./store/context";
function App() {
  const { themeIdx } = useAppContext();
  const theme = themes[themeIdx];
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <Calculator />
      </Wrapper>
    </ThemeProvider>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  display: grid;
  justify-content: center;
  align-content: center;
  font-family: "Spartan", sans-serif;
`;

export default App;
