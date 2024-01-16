import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Normalize } from "styled-normalize";

import Routes from "./routes";

import { Theme } from "./styles/Theme";
import GlobalStyle from "./styles/global";

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Routes />
        <GlobalStyle />
        <Normalize />
      </Theme>
    </BrowserRouter>
  );
}
