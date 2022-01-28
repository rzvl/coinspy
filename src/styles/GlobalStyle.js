import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Inter var', ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  hr {
    width: 60%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;

export default GlobalStyle;
