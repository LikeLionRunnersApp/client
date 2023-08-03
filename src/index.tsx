import ReactDOM from "react-dom/client";
import App from "./App";

import { Global } from "@emotion/react";
import GlobalStyle from "@assets/styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Global styles={GlobalStyle} />
    <App />
  </>
);
