import React from 'react';
import PropTypes from 'prop-types';

const pointDirection = {
  left: 'translate(3.5 12)',
  right: 'translate(16.5 12) scale(-1 1)'
};

const svgStyle = {
  fill: 'none',
  width: '20px',
  height: '20px',
  stroke: 'grey',
  strokeLinecap: 'round',
  strokeWidth: "5"
}

const Chevron = ({ direction, customStyle }) => (
  <svg viewBox="0 0 20 48" style={{...svgStyle, ...customStyle}}>
    <path
      d="M12.5 0L0 11.5L12.5 23"
      transform={pointDirection[direction]}
    />
  </svg>
);

Chevron.displayName = 'Chevron';
Chevron.propTypes = {
  customStyle: PropTypes.object,
  direction: PropTypes.oneOf(['right', 'left']).isRequired
};
Chevron.defaultProps = {
  direction: 'right',
  customStyle: {}
};
export default Chevron;
