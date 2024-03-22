import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/Inter-Medium.ttf') format('ttf'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url('./fonts/Inter-Regular.ttf') format('ttf'); 
  }
  @font-face {
    font-display: swap; 
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url('./fonts/Inter-SemiBold.ttf') format('ttf'); 
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-style: normal;

    font-family: ${theme.fonts.mainFont};
    background-color: ${({ theme }) => theme.colors.black};
    color:${({ theme }) => theme.colors.white}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }


  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;
