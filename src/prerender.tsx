import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "./App";
import { buildStructuredData } from "./content/structuredData";

export const render = () => {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(sheet.collectStyles(<App />));
    return {
      html,
      styles: sheet.getStyleTags(),
      structuredData: JSON.stringify(buildStructuredData()).replace(/</g, "\\u003c"),
    };
  } finally {
    sheet.seal();
  }
};
