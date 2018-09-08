import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Title.css';

const titleFont = props => {
  return cx({
    [styles.extraBoldTitle]: props.type === 'extra-bold',
    [styles.boldTitle]: props.type === 'bold',
    [styles.lightTitle]: props.type === 'light',
  });
};

const Title = props => {
  switch(props.header) {
    case 1:
      return ( 
        <h1 
          className={titleFont(props)}
          style={{ fontSize: `${props.size}` }}
        >{props.copy}</h1>
      );
    case 2:
      return ( 
        <h2 
          className={titleFont(props)}
          style={{ fontSize: `${props.size}` }}
        >{props.copy}</h2>
      );
    case 3:
      return ( 
        <h3 
          className={titleFont(props)}
          style={{ fontSize: `${props.size}` }}
        >{props.copy}</h3>
      );
    case 4:
      return ( 
        <h4 
          className={titleFont(props)}
          style={{ fontSize: `${props.size}` }}
        >{props.copy}</h4>
      );
    case 5:
      return ( 
        <h5 
          className={titleFont(props)}
          style={{ fontSize: `${props.size}` }}
        >{props.copy}</h5>
      );
    case 6:
      return ( 
        <h6 
          className={titleFont(props)}
          style={{ fontSize: `${props.size}` }}
        >{props.copy}</h6>
      );
    default:
      return null;
  };
};

Title.propTypes = {
  copy: PropTypes.string,
  header: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  size: PropTypes.string,
  type: PropTypes.oneOf(['extra-bold', 'bold', 'light']),
};

Title.defaultProps = {
  copy: '',
  header: 1,
  size: '14px',
  type: 'bold',
}
export default Title;

