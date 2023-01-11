import { Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from "../reducers";
import { createOrder } from '../../api';
import { resetConstructor } from './constructor';
import { orderDetailsActionsEnum } from '../types';

export const sendOrder = (requestData: Array<string>): ThunkAction<void, RootState, unknown, AnyAction>  => {
  return (dispatch: Dispatch) => {
    createOrder(requestData).then(res=>{
      dispatch({
        type: orderDetailsActionsEnum.SET_ORDER_DATA,
        payload: {
          name: res.name,
          orderNumber: res.order.number,
          showPopup: true
        }
      });

      dispatch(resetConstructor());

    }).catch(err => {
       console.error(err);
     })
  }
}

export const resetOrderDetails = () : AnyAction => {
  return {type: orderDetailsActionsEnum.RESET_ORDER_DATA}
}