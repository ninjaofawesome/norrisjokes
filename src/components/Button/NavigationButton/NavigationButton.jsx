import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'found';

import styles from './NavigationButton.css';

const buttonStyles = ({ color }) => {
  return cx({
    [styles.blackButton]: color === 'black',
    [styles.grayButton]: color === 'gray',
    [styles.whiteButton]: color === 'white',
    [styles.customButton]: color === 'custom',
  })
}

const NavigationButton = props => {
  console.log(props.copy)
  return (
    <Link
      to={`/${props.location}`}
      className={ buttonStyles(props) }
    >
      { props.content }
    </Link>
  );
};

NavigationButton.propTypes = {
  content: PropTypes.string,
  location: PropTypes.string,
  color: PropTypes.oneOf([ 'black', 'white', 'gray', 'custom']),
};

NavigationButton.defaultProps = {
  content: '',
  location: '',
  color: 'black',
};

export default NavigationButton;