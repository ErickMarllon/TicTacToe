import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display:grid;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  height: 100vh;
  background-color: rgb(156, 156, 156);  
}
`;
