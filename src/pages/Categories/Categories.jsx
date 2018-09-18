import React, { Component } from 'react';
import Modal from 'react-modal';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { handleResponse } from '../../utils/helperFunctions.js';
import { customStyles } from '../../utils/modalHelper.js';

import styles from './Categories.css';

class CategoriesPage extends Component {

  constructor() {
    super();

    this.state = {
      categories: [],
      modalIsOpen: false,
    };

    this.getJokeCategories = this.getJokeCategories.bind(this);
    this.showJokeCategories = this.showJokeCategories.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getJokeCategories() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(handleResponse)
    .then(data => {
      this.setState({ categories: data })
    })
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getJokeCategories();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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

  helloModal() {
    return(
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ul className={styles.appList}>
            {this.showJokeCategories()}
          </ul>
          <Button
            type='action'
            content='Okay'
            color='black'
            action={this.closeModal}
          />
        </Modal>
      </div>
    )
  }

  render() {
    console.log(this.state.modalIsOpen)
    return (
      <div className={styles.categoriesPageContainer}>
        {this.helloModal()}
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
          <div className={styles.categoriesButtonWrapper}>
            <Button
              type='action'
              content='Home'
              color='black'
              action={this.openModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesPage;
