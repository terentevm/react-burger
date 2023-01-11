import { Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from "../reducers";

import { getIngredients } from '../../api';
import { TIngredientsResponse } from "../../types";
import { ingredientsActionsEnum } from "../types";

export const getIngredientsFromApi = () : ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch : Dispatch) => {
    dispatch({ type: ingredientsActionsEnum.GET_INGREDIENTS_REQUEST });
    getIngredients().then((res: TIngredientsResponse) => {
      dispatch({
        type: ingredientsActionsEnum.GET_INGREDIENTS_SUCCESS,
        payload: res.data
      });
    }).catch((err: any) => {
      console.error(err);
      dispatch({ type: ingredientsActionsEnum.GET_INGREDIENTS_FAILED });
    })
  }
}