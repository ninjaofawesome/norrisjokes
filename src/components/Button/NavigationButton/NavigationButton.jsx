import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'found';

import styles from './NavigationButton.css';

const buttonStyles = props => {
  return cx({
    [styles.blackButton]: props.color === 'black',
    [styles.grayButton]: props.color === 'gray',
    [styles.whiteButton]: props.color === 'white',
    [styles.customButton]: props.color === 'custom',
  })
}

const NavigationButton = props => {
  return (
    <Link
      to={`/${props.location}`}
      className={buttonStyles(props)}
    >
      {props.copy}
    </Link>
  );
};

NavigationButton.propTypes = {
  copy: PropTypes.string,
  location: PropTypes.string,
  color: PropTypes.oneOf([ 'black', 'white', 'gray', 'custom']),
};

NavigationButton.defaultProps = {
  copy: '',
  location: '',
  color: 'black',
};

export default NavigationButton;