import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import cx from 'classnames';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import TextBox from '../../components/TextBox/TextBox';
import { handleResponse } from '../../utils/helperFunctions.js';
import { 
  populateCategories,
  chooseCategory, 
  categoryJoke,
} from '../../actions/actions';
import { customStyles } from '../../utils/modalHelper.js';

import styles from './Categories.css';

const jokeVisibility = props => {
  return cx({
    [styles.showJoke]: props.category !== '',
    [styles.hideJoke]: props.category === '',
  })
}

class CategoriesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.getJokeCategories();
  }

  getJokeCategories() {
    fetch('https://api.chucknorris.io/jokes/categories')
    .then(handleResponse)
    .then(data => {
       this.props.dispatch(populateCategories(data))
    })
    .catch(error => console.log(error));
  }
  
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  populateJoke(url) {
    fetch(url)
    .then(handleResponse)
    .then(data => {
       this.props.dispatch(populateCategories(data))
    })
    .catch(error => console.log(error));
  }


  setJoke(item) {
    this.props.dispatch(chooseCategory(item));
    this.closeModal();
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
          <div 
            className={styles.categoriesMenuItem}
            role='button'
            tabIndex={0}
            onClick={() => this.setJoke(item)}
          >
            {item}
          </div>
        </li>
      ))
    }
  }

  modalComponent() {
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
    const url = `https://api.chucknorris.io/jokes/random?category={${this.props.chosen}}`;
    return (
      <div className={styles.categoriesPageContainer}>
        {this.modalComponent()}
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
          <div className={jokeVisibility(this.props)}>
            <TextBox />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.reducers.categories.categoryList,
    chosen: state.reducers.categories.category,
    joke: state.reducers.jokes.categoryJoke,
  }
}

export default connect(mapStateToProps)(CategoriesPage);
