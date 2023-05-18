import { createGlobalStyle } from 'styled-components';
import Gotham from '../assets/fonts/Gotham.ttf';
import GothamLight from'../assets/fonts/GothamLight.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Gotham';
    src: url(${Gotham}) format('truetype');
  }

  @font-face {
    font-family: 'GothamLight';
    src: url(${GothamLight}) format('truetype');
  }

  * {
   font-family: Gotham;
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