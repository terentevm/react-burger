import { orderDetailsActionsEnum, TOrderDetailsState, TOrderDetailsAction } from '../types';
const initialState : TOrderDetailsState = {
  name: "",
  orderNumber: '',
  showPopup: false
}

const orderDetailsReducer = (state = initialState, action: TOrderDetailsAction) : TOrderDetailsState  => {

  const { type, payload } = action;

  switch (type) {
    case orderDetailsActionsEnum.SET_ORDER_DATA:
      return {...payload};
      break;
    case orderDetailsActionsEnum.RESET_ORDER_DATA:
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
