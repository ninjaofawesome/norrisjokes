import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { handleResponse } from '../../utils/helperFunctions.js';

import styles from './Categories.css';

class CategoriesPage extends Component {

  constructor() {
    super();

    this.state ={
      categories: [],
    };

    this.getJokeCategories = this.getJokeCategories.bind(this);
    this.showJokeCategories = this.showJokeCategories.bind(this);
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
      <div className={styles.categoriesPageContainer}>
        <div className={styles.categoriesTitleContainer}>
          <Title
            header={1}
            type='bold'
            size='Categories'
            copy='Categories'
          />
        </div>
        <div className={styles.categoriesContentContainer}>
          <p>Did you know that there are <span className={styles.boldText}>sixteen</span> different categories of Chuck Norris jokes to choose from?  It's true!  They are:</p>
          <div className={styles.categoriesListContainer}>
            <ul className={styles.appList}>
              {this.showJokeCategories()}
            </ul>
          </div>
          <div className={styles.categoriesButtonWrapper}>
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

export default CategoriesPage;
