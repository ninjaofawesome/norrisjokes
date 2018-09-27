import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { handleResponse } from '../../utils/helperFunctions.js';
import { populateCategories } from '../../actions/actions';
import { customStyles } from '../../utils/modalHelper.js';

import styles from './Categories.css';

class CategoriesPage extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.getJokeCategories = this.getJokeCategories.bind(this);
    this.populateCategories = this.populateCategories.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getJokeCategories() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(handleResponse)
    .then(data => {
       this.props.dispatch(populateCategories(data))
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

  placeholder(){
    console.log('sup dawg');
  }

  populateCategories() {
    const {
      categories,
    } = this.props;

    if (categories.length > 0) {
      return categories.map((item, index) => (
        <li 
          key={`category-${index}`} 
          className={styles.categoriesListItem}
        >
          <Button
            type='action'
            content={item}
            color='white'
            action={this.placeholder()}
          />
        </li>
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
          <ul className={styles.categoriesList}>
            {this.populateCategories()}
          </ul>
          <Button
            type='action'
            content='I decline.'
            color='black'
            action={this.closeModal}
          />
        </Modal>
      </div>
    )
  }

  render() {
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
          <p>There are <span className={styles.boldText}>sixteen</span> different categories of Chuck Norris jokes to choose from?  It's true!  Choose one from the menu to see a custom joke.</p>
          <div className={styles.categoriesButtonWrapper}>
            <Button
              type='action'
              content='Jokes'
              color='black'
              action={this.openModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.reducers.categories.category,
  }
}

export default connect(mapStateToProps)(CategoriesPage);
