import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { handleResponse } from '../../utils/helperFunctions.js'
import { populateJokes } from '../../actions/actions';


import styles from './Random.css';

class RandomPage extends Component {

  constructor(props) {
    super(props);

    this.getJokes = this.getJokes.bind(this);
  }

  componentDidMount() {
    this.getJokes();
  }

  getJokes() {
    const url = 'https://api.chucknorris.io/jokes/random';
    return(
      fetch(url)
      .then(handleResponse)
      .then(data => {
        this.props.dispatch(populateJokes(data.value));   
      })
      .catch(error => console.log('something went wrong!', error))
    );  
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
          <p className={styles.jokePrompt}>Okay here goes.</p>
          <p className={styles.jokeText}>{this.props.randomJoke}</p>
          <div className={styles.randomButtonWrapper}>
            <Button
              type='navigation'
              location='/'
              content='No more, please.'
              color='black'
            />
          </div>
          <div className={styles.randomButtonWrapper}>
            <Button
              type='navigation'
              location='/categories'
              content='Terrible.  Can I pick?'
              color='white'
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    randomJoke: state.reducers.jokes.randomJoke,
  }
};

export default connect(mapStateToProps)(RandomPage);