import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #FF5A5F;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
