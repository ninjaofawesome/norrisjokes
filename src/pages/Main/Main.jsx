import React from 'react';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

import styles from './Main.css';

const MainPage = () => (
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
      <p>This is the main page of the app.  Click to go somewhere</p>
      <div className={styles.mainButtonWrapper}>
        <Button
          type='navigation'
          location='/categories'
          content='Categories'
          color='black'
        />
      </div>
    </div>
  </div>
);

export default MainPage;
