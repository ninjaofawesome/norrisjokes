import React from 'react';
import PropTypes from 'prop-types';

const MainPage = props => (
  <div>
    {props.children}
  </div>
);

export default MainPage;

MainPage.propTypes = {
  children: PropTypes.node,
};

MainPage.defaultProps = {
  children: <div />
};


