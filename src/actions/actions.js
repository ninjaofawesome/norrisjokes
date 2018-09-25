import { handleResponse } from '../utils/helperFunctions.js';

export const GET_RANDOM_CATEGORIES = 'GET_RANDOM_CATEGORIES';
export const GET_RANDOM_JOKE = 'GET_RANDOM_JOKE';

export const populateCategories = data => ({
  type: GET_RANDOM_CATEGORIES,
  category: data,
});

export const populateJokes = data => ({
  type: GET_RANDOM_JOKE,
  joke: data,
})

export const fetchJokes = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  return(
    fetch(url)
    .then(handleResponse)
    .then(data => {
      return dispatch => populateJokes(data);   
    })
    .catch(error => console.log('something went wrong!', error))
  );  
};