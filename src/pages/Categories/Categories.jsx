import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { handleResponse } from '../../utils/helperFunctions.js';
import { 
  populateCategories,
  chooseCategory, 
} from '../../actions/actions';
import { customStyles } from '../../utils/modalHelper.js';

import styles from './Categories.css';

class CategoriesPage extends Component {

  constructor() {
    super();

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
          <div 
            className={styles.categoriesMenuItem}
            role='button'
            tabIndex={0}
            onClick={() => this.props.dispatch(chooseCategory(item))}
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.reducers.categories.categoryList,
  }
}

export default connect(mapStateToProps)(CategoriesPage);
