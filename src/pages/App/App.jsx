import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import { handleResponse } from '../../utils/helperFunctions.js';

import styles from './App.css';

const alertFunc = () => (
  alert('you clicked the button!')
);

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
        <p className={styles.appText}>Hello World</p>
        <div className={styles.buttonWrapper}>
          <Button 
            content='categories' 
            type='navigation'
            location='categories'
            color='black'
          />
        </div>

        <div className={styles.buttonWrapper}>
          <Button 
            content='click this' 
            action={alertFunc}
            type='action'
            color='white'
          />
        </div>
        <p className={styles.appText}>{ this.state.randomJoke }</p>
        <ul>
          {this.showJokeCategories()}
        </ul>
      </div>
    );
  }
}

export default App;
