import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyleWrapper from './Button.style';
import Spinner from '@components/Spinner';

const Button = ({
  onClick, type, className, children,
  loading, disabled, width, icon
}) => (
  <ButtonStyleWrapper
    width={width}
    className={className}
    onClick={onClick}
    onKeyPress={onClick}
    loading={loading}
    tabIndex="0"
    role="button"
  >
    <div className="button-background"/>
    <div className="button-background-active"/>
    <button
      disabled={disabled}
      className="button-button"
      type={type}
    >
      {children}
      { loading ? <Spinner color="white"/> : icon }
    </button>
  </ButtonStyleWrapper>
);

Button.propTypes = {

};

Button.defaultProps = {
  loading: false,
  disabled: false,
  type: '',
  className: '',
  width: 'auto'
};

export default Button;
