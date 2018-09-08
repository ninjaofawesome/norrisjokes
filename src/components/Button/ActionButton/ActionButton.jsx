import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './NavigationButton.css';

const buttonStyles = props => {
  return cx({
    [styles.blackButton]: props.color === 'black',
    [styles.grayButton]: props.color === 'gray',
    [styles.whiteButton]: props.color === 'white',
    [styles.customButton]: props.color === 'custom',
  })
}

const ActionButton = props => {
  return (
    <Button
      onClick={props.action}
      className={buttonStyles(props)}
    >
      {props.copy}
    </Button>
  );
};

ActionButton.propTypes = {
  copy: PropTypes.string,
  action: PropTypes.func,
  color: PropTypes.oneOf([ 'black', 'white', 'gray', 'custom']),
};

ActionButton.defaultProps = {
  copy: '',
  action: () => {},
  color: 'black',
};

export default NavigationButton;