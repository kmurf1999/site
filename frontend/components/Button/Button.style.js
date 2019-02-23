import styled from 'styled-components';

import colors from '@styles/colors';
import { boxShadow, boxShadowTransition } from '@styles/mixins';

const absoluteFullWidth = `
  position: absolute;
  top: 0; left: 0;
  margin: 0 auto;
  width: 100%; height: 100%;
  border-radius: 2px;
`;

const ButtonStyleWrapper = styled.div`
  cursor: pointer;
  height: 40px;
  ${boxShadow(1)};
  ${boxShadowTransition()};
  width: ${props => props.width};
  border: 0;
  position: relative;
  background: transparent;
  border-radius: 2px;
  &:hover,
  &:focus,
  &:active {
    border: 0;
    outline: 0;
    ${boxShadow(2)};
    .button-button {
      color: white;
    }
    .button-background-active {
      width: 100%;
    }
  }

  .button-background {
    ${absoluteFullWidth}
    background: white;
  }

  .button-background-active {
    ${absoluteFullWidth}
    width: ${props => props.loading ? '100%' : '0%'};
    background: ${colors.blue};
    transition: width .3s;
  }

  .button-button {
    color: ${props => props.loading ? 'white' : colors.darkGray};
    background: transparent;
    border: 0;
    ${absoluteFullWidth}
    font-family: 'Roboto Slab';
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: middle;
    padding-left: 10px;
    > svg {
      height: 25px;
      width: 25px;
      margin-left: 10px;
      float: right;
    }
  }

`;

export default ButtonStyleWrapper;
