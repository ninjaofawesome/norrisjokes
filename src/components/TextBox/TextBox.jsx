import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextBox.css';

const TextBox = props => (
  <div className={styles.textBoxWrapper}>
    {props.children}
  </div>
);

TextBox.propTypes = {
  children: PropTypes.node,
};

TextBox.defaultProps = {
  children: <div />
};

export default TextBox;