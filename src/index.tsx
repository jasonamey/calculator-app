import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppProvider} from "./context";

import App from "./App";

var mountNode = document.getElementById("root");
ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  mountNode
);
