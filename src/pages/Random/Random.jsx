import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { handleResponse } from '../../utils/helperFunctions.js';

import styles from './Random.css';

class RandomPage extends Component {
  constructor() {
    super();

    this.state = {
      randomJoke: '',
    };

    this.randomJokeRequest = this.randomJokeRequest.bind(this);
  }

  randomJokeRequest() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(handleResponse)
    .then(data => {
      this.setState({ randomJoke: data.value });  
    })
    .catch(error => console.log('something went wrong!', error));
  }

  componentDidMount() {
    this.randomJokeRequest();
  }

  render() {
    return(
      <div className={styles.randomPageContainer}>
        <div className={styles.randomTitleContainer}>
          <Title
            header={1}
            type='bold'
            size='3em'
            copy='NorrisJokes'
          />
        </div>
        <div className={styles.randomContentContainer}>
          <div className={styles.randomCopyContainer}>
            <p>Okay here goes.</p>
            <p className={styles.jokeText}>{this.state.randomJoke}</p>
          </div>
          <div className={styles.randomButtonWrapper}>
            <Button
              type='navigation'
              location='/categories'
              content='Categories'
              color='black'
            />
          </div>
          <div className={styles.randomButtonWrapper}>
            <Button
              type='navigation'
              location='/'
              content='Home'
              color='black'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RandomPage;