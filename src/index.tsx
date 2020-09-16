import * as React from "react";
import * as ReactDom from "react-dom";
import { Global, css } from "@emotion/core";
import App from "./App";

ReactDom.render(
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
    <App />
  </>,
  document.getElementById("root")
);
