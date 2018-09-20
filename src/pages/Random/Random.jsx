import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';


import styles from './Random.css';

class RandomPage extends Component {

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
          <p className={styles.jokeText}>hello</p>
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
  console.log('state', state)
  return {
    randomJoke: state,
  }
};

export default connect(mapStateToProps)(RandomPage);