import styled from 'styled-components';

import colors from '@styles/colors';
import { boxShadow, boxShadowTransition } from '@styles/mixins';

const InputStyleWrapper = styled.div`
  position: relative;
  padding: 0;
  width: ${props => props.width};

  .input-wrapper {
    position: relative;
    height: 40px;
    width: 100%;
    padding: 0 10px;
    background: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 2px;
    ${boxShadowTransition};
    ${props => props.focus ? boxShadow(2) : boxShadow(1)};
    &:hover {
      ${boxShadow(2)};
    }
    > svg {
      height: 20px;
      width: 20px;
      transition: fill .3s ease;
      fill: ${
        props => {
          switch(props.status) {
            case 'success': return colors.blue;
            case 'warning': return colors.orange;
            case 'error': return colors.red;
            default: return colors.gray;
          }
        }
      };
    }
  }

  .input-input {
    height: 30px;
    width: 100%;
    padding: 0 10px;
    line-height: normal;
    font-family: 'Roboto';
    font-weight: 400;
    color: ${colors.darkGray};
    &::placeholder {
      color: ${colors.gray};
    }
    &:focus, &:active {
      outline: none;
    }
  }

  .input-helper-text {
    background: ${props => props.status === 'warning' ? colors.orange : colors.red};
    width: max-content;
    padding: 0 10px;
    font-family: 'Roboto';
    font-size: 14px;
    color: white;
    border-radius: 2px;
  }

  .input-helper-text-shown {
    opacity: 1;
    height: 20px;
    margin-top: 5px;
  }

  .input-helper-text-hidden {
    opacity: 0;
    height: 0;
    margin-top: 30px;
  }
`;

export default InputStyleWrapper;
