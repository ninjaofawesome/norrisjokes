import React from 'react';
import PropTypes from 'prop-types';
import NavigationButton from './NavigationButton/NavigationButton';
import ActionButton from './ActionButton/ActionButton';


const Button = props => {
  switch(props.type) {
    case 'navigation':
      return <NavigationButton {...props} />
    case 'action':
      return <ActionButton {...props} />
    default:
      return null;
  }
};

Button.propTypes = {
  type: PropTypes.string,
};

Button.defaultProps = {
  type: '',
};

export default Button;