import React, { Component } from 'react';

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
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({ randomJoke: data.value });
    });
  }

  getJokeCategories() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(results => {
      return results.json();
    })
    .then(data => {
     this.setState({ categories: data})
    });

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
        <p>Hello World</p>
        <p>{ this.state.randomJoke }</p>
        <ul>
          {this.showJokeCategories()}
        </ul>
      </div>
    );
  }
}

export default App;
