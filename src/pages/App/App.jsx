import React, { Component } from 'react';
import '../../index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      joke: '',
    };
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({joke: data.value});
    });
  }

  render() {
    return (
      <div className='app'>
        <p>Hello World</p>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default App;
