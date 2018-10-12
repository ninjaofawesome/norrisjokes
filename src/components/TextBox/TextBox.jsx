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

  populateJoke() {
    const categoryURL = `https://api.chucknorris.io/jokes/random?category={${this.props.chosen}}`; 

    const myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');

    const myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

    const myRequest = new Request(categoryURL, myInit);

    console.log('headers', myHeaders )

    fetch(myRequest)
    .then( response => console.log('response', response))
    .catch(error => console.log('error', error));
  }

  render() {
    console.log('chosen', this.props.chosen)
    return (
      <div className={styles.textBoxWrapper}>
        {this.props.chosen !== '' ? this.populateJoke() : ''}
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