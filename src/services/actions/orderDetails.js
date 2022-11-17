import { createOrder } from '../../api';

export const SET_ORDER_DATA = 'SET_ORDER_DATA';
export const RESET_ORDER_DATA = 'RESET_ORDER_DATA';

export const sendOrder = (requestData) => {
  return (dispatch) => {
    createOrder(requestData).then(res=>{
      dispatch({
        type: SET_ORDER_DATA,
        payload: {
          name: res.name,
          orderNumber: res.order.number,
          showPopup: true
        }
      })
    }).catch(err => {
       console.error(err);
     })
  }
}

export const resetOrderDetails = () => {
  return {type: RESET_ORDER_DATA}
}