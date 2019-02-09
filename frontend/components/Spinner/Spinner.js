import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={{"background": "none"}}
  >
    <circle
      cx="50" cy="50"
      fill="none"
      stroke={color}
      strokeWidth="10" r="35"
      strokeDasharray="164.93361431346415 56.97787143782138"
      transform="rotate(341.914 50.0001 50)">
      <animateTransform
        attributeName="transform"
        type="rotate"
        calcMode="linear"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
        dur="1s"
        begin="0s"
        repeatCount="indefinite"
      >
      </animateTransform>
    </circle>
  </svg>
);

Spinner.defaultProps = {
  size: '25px',
  color: '#ccc'
};

export default Spinner;
