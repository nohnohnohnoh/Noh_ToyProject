import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
html,
body{
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x:hidden;
}

* {
  box-sizing: border-box; 
  outline: none;
}

`;
export default GlobalStyle;
