import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div className='home'>
      <Categories />
      I am home page
    </div>
  );
}

// setting up for now, no idea what the state of a joke is yet.
const mapStateToProps = state => {
  return {
    jokes: state,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changePage: () => push('/about'),
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
