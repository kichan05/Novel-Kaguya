import {createGlobalStyle} from "styled-components";
import {InitialStyle} from "./InitialStyle";
import {FontStyle} from "./Font";

export const GlobalStyle = createGlobalStyle`
  ${InitialStyle};
  ${FontStyle}
  
  *, *::before, *::after {
    color: ${p => p.theme.color.Gray8};
    font-family: SUIT, serif;
    line-height: 1.5em;
  }
  
  body {
    min-width: 320px;
    background-color: ${p => p.theme.color.Gray0};
  }
  
  button, input {
    background: none;
    color: inherit;
    border: none;
    cursor: pointer;
    outline: inherit;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
  input:focus {
    outline: none;
  }
`