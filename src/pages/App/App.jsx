import React, { Component } from 'react';
import { Link } from 'found';
import { handleResponse } from '../../utils/helperFunctions.js';
import Title from '../../components/Title/Title';

import styles from './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      randomJoke: '',
      categories: [],
    };

    this.randomJokeRequest = this.randomJokeRequest.bind(this);
    this.getJokeCategories = this.getJokeCategories.bind(this);
    this.showJokeCategories = this.showJokeCategories.bind(this);
  }

  randomJokeRequest() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(handleResponse)
    .then(data => {
      this.setState({ randomJoke: data.value });  
    })
    .catch(error => console.log(error));
  }

  getJokeCategories() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(handleResponse)
    .then(data => {
      this.setState({ categories: data})
    })
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.randomJokeRequest();
    this.getJokeCategories();
  }

  showJokeCategories() {
    const {
      categories,
    } = this.state;

    if (categories.length > 0) {
      return categories.map((item, index) => (
        <li key={`category-${index}`}>{item}</li>
      ))
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <Title
          copy='Norrisjokes'
          size='3em'
          type='extra-bold' 
        />
        <p className={styles.appText}>{ this.state.randomJoke }</p>
        <ul>
          {this.showJokeCategories()}
        </ul>
        <Link to='/categories'>Categories</Link>
      </div>
    );
  }
}

export default App;
