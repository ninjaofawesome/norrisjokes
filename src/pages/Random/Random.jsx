import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { fetchJokes } from '../../actions/actions';


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
    window.addEventListener('load', this.props.fetchJokes());
  }
  render() {
    console.log(this.props);
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
          <p className={styles.jokeText}>"{this.props.randomJoke}"</p>
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchJokes,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomPage);