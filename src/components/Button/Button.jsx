import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = props => {
  return (
    <button className={styles.button}>{props.copy}</button>
  );
}

Button.propTypes = {
  copy: PropTypes.string,
};

Button.defaultProps = {
  copy: '',
};

export default Button;