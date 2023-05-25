import { createGlobalStyle } from 'styled-components';
import GothamLight from'../assets/fonts/GothamLight.ttf';
import Lato from '../assets/fonts/Lato.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'GothamLight';
    src: url(${GothamLight}) format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    src: url(${Lato}) format('truetype');
  }

  * {
    font-family: Lato;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    overflow-y: scroll;
  }
`;

export default GlobalStyle;
