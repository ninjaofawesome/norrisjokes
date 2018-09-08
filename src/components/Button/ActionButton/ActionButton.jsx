import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './ActionButton.css';

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
    <button
      onClick={props.action}
      className={buttonStyles(props)}
    >
      {props.content}
    </button>
  );
};

ActionButton.propTypes = {
  content: PropTypes.string,
  action: PropTypes.func,
  color: PropTypes.oneOf([ 'black', 'white', 'gray', 'custom']),
};

ActionButton.defaultProps = {
  content: '',
  action: () => {},
  color: 'black',
};

export default ActionButton;