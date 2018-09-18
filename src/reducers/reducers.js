import { combineReducers } from 'redux';
import { SIMPLE_ACTION } from '../actions/actions'

const initialState = {
  category: 'test',
};

export const test = (state = initialState, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION':
    console.log('action', action)
   return Object.assign({}, state, 'category': action.category);
  default:
   return state;
 }
}

const jokeReducer = combineReducers({
  test,
})

export default jokeReducer;