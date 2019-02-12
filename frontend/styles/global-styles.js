import { createGlobalStyle } from 'styled-components';
import reset from './css-reset';
import typography from '@styles/typography';

// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
  ${reset}

  body, main {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
  }

  input, textarea, button,
  div, span, svg {
    &:hover,
    &:active,
    &::-moz-focus-inner,
    &:focus {
      border: 0;
      outline: 0;
    }
  }

  button:focus { outline: 0; }

  main {
    min-height: 100vh;
  }

  input[type=text],
  input[type=email],
  input[type=password],
  textarea {
     -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .contact-form-wrapper {
    position: relative;

    .contact-svg-top {
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  ${typography}

`;

export default GlobalStyle;
