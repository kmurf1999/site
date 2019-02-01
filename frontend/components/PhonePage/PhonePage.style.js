import styled, { keyframes } from 'styled-components';

import colors from '@styles/colors';
import { darken, screens } from '@styles/mixins';

const animationTime = 1;

const pieces = {
  'contact_button': {
    yi: 0, yf: -200, xi: -1000, xf: 0
  },
  'front_assembly': {
    yi: 0, yf: -200, xi: 1000, xf: 0
  },
  'ui': {
    yi: 0, yf: -100, xi: -1000, xf: 0
  },
  'react_logo': {
    yi: 0, yf: -100, xi: 1000, xf: 0
  },
  'react_screen': {
    yi: 0, yf: 0, xi: -1000, xf: 0
  },
  'Mongo': {
    yi: 0, yf: 100, xi: 1000, xf: 0
  },
  'nodejs': {
    yi: 0, yf: 100, xi: -1000, xf: 0
  },
  'BackScreen': {
    yi: 0, yf: 200, xi: 1000, xf: 0
  },
  'back_assembly': {
    yi: 0, yf: 300, xi: -1000, xf: 0
  }
};

let animations = {};

Object.keys(pieces).forEach(key => {
  animations[key] = keyframes`
    0% {
      transform: translate(${pieces[key].xi}px, ${pieces[key].yi}px);
      opacity: 0;
      pointer-events: none;
    }
    100% {
      pointer-events: inherit;
      transform: translate(${pieces[key].xf}px, ${pieces[key].yf}px);
      opacity: 1;
    }
  `;
});


const PhonePageStyleWrapper = styled.div`
  overflow: visible;
  text-align: center;
  margin: 0;
  background: #2a2d38;
  font-family: 'Raleway';
  height: 100vh;
  width: 100%;

  .phone-page-header {
    padding-top: 40px;
    margin: 0 auto;
    width: auto;
    display: table;

    .phone-page-name {
      color: white;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 5px;
      margin-left: 5px;
      text-align: justify;
      @media only screen and (max-width: ${screens.sm}) {
        text-align: center;
        margin-bottom: 10px;
      }
    }

    .phone-page-title {
      color: ${colors.orange};
      font-weight: 500;
      text-shadow: ${colors.red} 2px 4px;
      text-align: justify;
      font-size: 72px;
      @media only screen and (max-width: ${screens.sm}) {
        text-align: center;
        font-size: 60px;
      }
    }
  }

  .phone-page-svg {
    width: 100%;
    height: 100%;
    > svg {
      max-width: 500px;
      overflow: visible;
      padding: 150px 0;
      @media only screen and (max-width: ${screens.sm}) {
        padding: 100px 0;
      }
      > g {
        transition: all 0.3s ease !important;
      }
    }
    #contact_button {
      transform: translate(${pieces['contact_button'].xf}px, ${pieces['contact_button'].yf}px);
      animation: ${animations['contact_button']} 0.5s normal backwards ease-out;
      animation-delay: ${8 * animationTime / 8}s;
      cursor: pointer;
      > polygon {
        transition: fill 0.3s ease;
      }
      &:hover {
        > polygon:nth-child(1) {
          fill: ${colors.orange} !important;
        }
        > polygon:nth-child(3) {
          fill: ${darken(colors.orange, 20)} !important;
        }
        > polygon:nth-child(4) {
          fill: ${darken(colors.orange, 10)} !important;
        }
      }
    }
    #front_assembly {
      transform: translate(${pieces['front_assembly'].xf}px, ${pieces['front_assembly'].yf}px);
      animation: ${animations['front_assembly']} 0.5s normal backwards ease-out;
      animation-delay: ${0 * animationTime / 8}s;
    }
    #ui {
      transform: translate(${pieces['ui'].xf}px, ${pieces['ui'].yf}px);
      animation: ${animations['ui']} 0.5s normal backwards ease-out;
      animation-delay: ${1 * animationTime / 8}s;
    }
    #react_logo {
      transform: translate(${pieces['react_logo'].xf}px, ${pieces['react_logo'].yf}px);
      animation: ${animations['react_logo']} 0.5s normal backwards ease-out;
      animation-delay: ${2 * animationTime / 8}s;
    }
    #react_screen {
      transform: translate(${pieces['react_screen'].xf}px, ${pieces['react_screen'].yf}px);
      animation: ${animations['react_screen']} 0.5s normal backwards ease-out;
      animation-delay: ${3 * animationTime / 8}s;
    }
    #Mongo {
      transform: translate(${pieces['Mongo'].xf}px, ${pieces['Mongo'].yf}px);
      animation: ${animations['Mongo']} 0.5s normal backwards ease-out;
      animation-delay: ${4 * animationTime / 8}s;
    }
    #nodejs {
      transform: translate(${pieces['nodejs'].xf}px, ${pieces['nodejs'].yf}px);
      animation: ${animations['nodejs']} 0.5s normal backwards ease-out;
      animation-delay: ${5 * animationTime / 8}s;
    }
    #BackScreen {
      transform: translate(${pieces['BackScreen'].xf}px, ${pieces['BackScreen'].yf}px);
      animation: ${animations['BackScreen']} 0.5s normal backwards ease-out;
      animation-delay: ${6 * animationTime / 8}s;
    }
    #back_assembly {
      transform: translate(${pieces['back_assembly'].xf}px, ${pieces['back_assembly'].yf}px);
      animation: ${animations['back_assembly']} 0.5s normal backwards ease-out;
      animation-delay: ${7 * animationTime / 8}s;
    }
  }
`;

export default PhonePageStyleWrapper;
