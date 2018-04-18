import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';

const Main = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </div>
)

export default Main;
