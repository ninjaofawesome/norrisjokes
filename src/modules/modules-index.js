import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import jokeReducer from '../reducers/reducers.js';

export default combineReducers({
  routing: routerReducer,
  jokes: jokeReducer,
});