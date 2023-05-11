import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

`;

root.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
