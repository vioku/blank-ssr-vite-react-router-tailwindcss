import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export function render(url, ssrManifest, options) {
  return renderToPipeableStream(
    <StaticRouter location={"/" + url}>
      <App />
    </StaticRouter>,
    options
  );
}
