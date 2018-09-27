import React from 'react';
import PropTypes from 'prop-types';

import styles from './App.css';

const App = props => {
  return (
    <div className={styles.appContainer}>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: <div />,
};

export default App;