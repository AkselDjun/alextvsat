import { createGlobalStyle } from "styled-components";
import { colors, headerHeight } from "./theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: ${headerHeight + 16}px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-family: "Manrope", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: ${colors.text};
    background: ${colors.surface};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    margin: 0;
    color: ${colors.ink};
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  :focus-visible {
    outline: 3px solid ${colors.blue};
    outline-offset: 2px;
    border-radius: 6px;
  }

  ::selection {
    background: ${colors.accent};
    color: #fff;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
