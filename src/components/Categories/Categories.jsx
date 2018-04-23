import React, { Component } from 'react';
import PropTypes from 'prop-types';

const listItems = categories => (
  categories.map(item => {
    return(
      <li>{item}</li>
    );
  })
);

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(results => {
        return results.json();
      }).then(data => {
        this.setState({ categories: data })
      });
  }

  render() {
    return (
      <div>
        <ul>
        {listItems(this.state.categories)}
        </ul>
      </div>
    )
  }
};

export default Categories;