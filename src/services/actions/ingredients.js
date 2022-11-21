import { getIngredients } from '../../api';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const getIngredientsFromApi = () => {
  return (dispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    getIngredients().then(res => {
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        payload: res.data
      });
    }).catch((err) => {
      console.error(err);
      dispatch({ type: GET_INGREDIENTS_FAILED });
    })
  }
}