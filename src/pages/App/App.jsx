import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import TextBox from '../../components/TextBox/TextBox';
import { handleResponse } from '../../utils/helperFunctions.js';

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
        <div className={styles.appTextContainer}>
          <TextBox>
            <Title
              type='bold'
              header={1}
              size='3em'
              copy='NorrisJokes'
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed pulvinar diam. Praesent feugiat sem ac ante aliquet, mattis dapibus elit consequat. Praesent elit magna, ullamcorper ac sollicitudin vel, ullamcorper sit amet libero. Nullam sed nisi quis nisl lacinia luctus id pretium tortor. Suspendisse potenti. Phasellus vehicula vitae dui non dignissim. Nulla molestie metus ut nisl euismod mollis. Aliquam tempus dui ac tellus gravida sollicitudin. Integer lobortis nibh mattis mi posuere, at pellentesque ipsum dictum. Quisque id mauris vel leo egestas gravida vitae a ex.</p>
          </TextBox>
        </div>
        <div className={styles.appTextContainer}>
          <p className={styles.appJoke}>{ this.state.randomJoke }</p>
        </div>
        <div className={styles.appListContainer}>
          <ul className={styles.appList}>
            {this.showJokeCategories()}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
