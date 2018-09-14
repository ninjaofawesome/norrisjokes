import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { handleResponse } from '../../utils/helperFunctions.js';

import styles from './Main.css';

class MainPage extends Component {

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
    return (
      <div className={styles.mainPageContainer}>
        <div className={styles.mainTitleContainer}>
          <Title
            header={1}
            type='bold'
            size='3em'
            copy='NorrisJokes'
          />
        </div>
        <div className={styles.mainContentContainer}>
          <Title
            header={2}
            type='light'
            size='1.5em'
            copy='Chuck Norris jokes for all occasions!'
          />
          <div className={styles.mainCopyContainer}>
            <p className={styles.jokeText}>{this.state.randomJoke}</p>
          </div>
          <div className={styles.mainButtonWrapper}>
            <Button
              type='navigation'
              location='/categories'
              content='Categories'
              color='black'
            />
          </div>
        </div>
      </div>
    );
  }
}


export default MainPage;
