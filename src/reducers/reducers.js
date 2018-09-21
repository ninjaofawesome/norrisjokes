import { 
  GET_RANDOM_CATEGORIES,
  GET_RANDOM_JOKE,  
} from '../actions/actions';
import { combineReducers } from 'redux';

const initialCategoryState = {
  category: '',
};

const initialJokeState = {
  randomJoke: '',
};


export const categoriesReducer = (state = initialCategoryState, action) => {
 switch (action.type) {
  case 'GET_RANDOM_CATEGORIES':
   return Object.assign({}, state, 'category': action.category);
  default:
   return state;
 }
};

export const jokesReducer = (state = initialJokeState, action) => {
 switch (action.type) {
  case 'GET_RANDOM_JOKE':
   return Object.assign({}, state, 'randomJoke': action.joke);
  default:
   return state;
 }
};


const reducers = combineReducers({
  categories: categoriesReducer,
  jokes: jokesReducer,
});

export default reducers;
