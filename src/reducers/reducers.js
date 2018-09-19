import { combineReducers } from 'redux';
import { GET_RANDOM_CATEGORIES } from '../actions/actions'

const initialCategoryState = {
  category: '',
};

const initialJokeState = {
  randomJoke: '',
};


export const categories = (state = initialCategoryState, action) => {
 switch (action.type) {
  case 'GET_RANDOM_CATEGORIES':
   return Object.assign({}, state, 'category': action.category);
  default:
   return state;
 }
};

export const jokes = (state = initialJokeState, action) => {
 switch (action.type) {
  case 'GET_RANDOM_JOKE':
   return Object.assign({}, state, 'randomJoke': action.joke);
  default:
   return state;
 }
};


const jokeReducer = combineReducers({
  categories,
  jokes,
})

export default jokeReducer;