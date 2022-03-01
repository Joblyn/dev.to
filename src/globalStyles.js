import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    white-space: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(23, 23, 23);
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background: rgb(245, 245, 245);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: rgb(59, 73, 223);
  }
`;
export default GlobalStyles;
