import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    font-weight: bold;
    font-family: monospace;
  }
  #root {
    background: linear-gradient(to bottom right, #4286f4, #373B44);
    position: relative;
  }
`;
