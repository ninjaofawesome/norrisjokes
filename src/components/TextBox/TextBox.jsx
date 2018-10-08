import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleResponse } from '../../utils/helperFunctions.js';
import { 
  populateCategories,
  chooseCategory, 
  categoryJoke,
} from '../../actions/actions';
import styles from './TextBox.css';

class TextBox extends Component {
  componentWillMount(){
    this.populateJoke();
  }

  populateJoke(url) {
    const categoryURL = this.props.chosen !== '' ? `https://api.chucknorris.io/jokes/random?category={${this.props.chosen}}`: ''; 
     fetch(categoryURL)
    .then(handleResponse)
    .then(data => {
       this.props.dispatch(populateCategories(data))
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className={styles.textBoxWrapper}>
        {this.props.chosen}
      </div>
    );
  }
};

TextBox.propTypes = {
  chosen: PropTypes.string,
};

TextBox.defaultProps = {
  chosen: '',
};

const mapStateToProps = state => {
  return {
    chosen: state.reducers.categories.category,  
  }
}

export default connect(mapStateToProps)(TextBox);