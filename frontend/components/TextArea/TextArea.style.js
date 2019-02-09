import styled from 'styled-components';

import colors from '@styles/colors';
import { boxShadow, boxShadowTransition } from '@styles/mixins';

const TextAreaStyleWrapper = styled.div`
  width: ${props => props.width};
  position: relative;
  padding: 0;

  .textarea-wrapper {
    position: relative;
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
    > svg:nth-of-type(1) {
      left: 10px;
    }
    > svg:nth-of-type(2) {
      right: 10px;
    }
    > svg {
      position: absolute;
      top: 10px;
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

  .textarea-textarea {
    resize: none;
    width: 100%;
    padding: 10px 30px;
    line-height: normal;
    font-family: 'Roboto';
    font-weight: 400;
    appearance: none;
    color: ${colors.darkGray};
    &::placeholder {
      color: ${colors.gray};
    }
    &:focus, &:active, &:hover {
      -webkit-appearance: none;
      outline: none;
    }
  }

  .textarea-helper-text {
    width: max-content;
    padding: 0 10px;
    background: ${props => props.status === 'warning' ? colors.orange : colors.red};
    font-family: 'Roboto';
    font-size: 14px;
    color: white;
    border-radius: 2px;
  }

  .textarea-helper-text-shown {
    opacity: 1;
    height: 20px;
    margin-top: 5px;
  }

  .textarea-helper-text-hidden {
    opacity: 0;
    height: 0;
    margin-top: 30px;
  }
`;

export default TextAreaStyleWrapper;
