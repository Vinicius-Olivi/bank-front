import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
     margin:0;
     padding:0;
     outline:0;
     ol,
ul {
  list-style: none;
}
 }


 #root {
     display: flex;
     flex-direction: column;
     height: 100vh;
 }

 $primary: #42145f;
`;

export default GlobalStyle;
