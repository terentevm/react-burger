import { checkResponse } from '../utils/checkResponse';

const API_ROOT = 'https://norma.nomoreparties.space/api';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
}

const getIngredients = () => {
  return request(`${API_ROOT}/ingredients`, {headers: headers});

}

const createOrder = (ingredientIds) => {
  return request(`${API_ROOT}/orders`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ingredients: ingredientIds})
  });
}

export { getIngredients, createOrder };
