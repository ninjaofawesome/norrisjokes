import { handleResponse } from '../utils/helperFunctions.js';

export const GET_RANDOM_CATEGORIES = 'GET_RANDOM_CATEGORIES';
export const GET_RANDOM_JOKE = 'GET_RANDOM_JOKE';
export const CHOOSE_CATEGORY = 'CHOOSE_CATEGORY';

export const populateCategories = data => ({
  type: GET_RANDOM_CATEGORIES,
  categoryList: data,
});

export const chooseCategory = data => ({
  type: CHOOSE_CATEGORY,
  category: data,
})

export const populateJokes = data => ({
  type: GET_RANDOM_JOKE,
  joke: data,
});

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