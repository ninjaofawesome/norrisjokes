import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';


import styles from './Main.css';

const MainPage = () => {
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
          <p>Want to hear one?</p>
        </div>
        <div className={styles.mainButtonWrapper}>
          <Button
            type='navigation'
            location='/categories'
            content='Sure. Surprise me.'
            color='black'
          />
        </div>
        <div className={styles.mainButtonWrapper}>
          <Button
            type='navigation'
            location='/random'
            content='Yes, but I call the shots.'
            color='white'
          />
        </div>
      </div>
    </div>
  );
}


export default MainPage;
