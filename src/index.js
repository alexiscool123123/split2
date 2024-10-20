import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}


ReactDOM.render(
  <StrictMode>
    <App/>
  </StrictMode>,
  rootElement
);

