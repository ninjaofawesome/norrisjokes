import React from 'react';
import { Link } from 'found';

import styles from './Random.css';

const RandomPage = () => (
  <div>
    Some Rando!
    <Link to='/'>Home</Link>
    <Link to='/categories'>Categories</Link>
  </div>
);

export default RandomPage;