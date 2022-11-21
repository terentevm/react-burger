import { SET_ORDER_DATA, RESET_ORDER_DATA } from '../actions/orderDetails';

const initialState = {
  name: "",
  orderNumber: '',
  showPopup: false
}

const orderDetailsReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case SET_ORDER_DATA:
      return {...payload};
      break;
    case RESET_ORDER_DATA:
      return {
        name: "",
        orderNumber: '',
        showPopup: false
      };
      break;
    default:
      return state;
  }
}

export { orderDetailsReducer };
