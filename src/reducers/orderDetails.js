const initialState = {
  name: "",
  orderNumber: ''
}

const actions = {
  SET_ORDER_DATA: 'SET_ORDER_DATA',
}

const orderDetailsReducer = (state, action) => {

  const { type, payload } = action;

  switch (type) {
    case actions.SET_ORDER_DATA:
      return {...payload};
      break;
    default:
      return state;
  }
}

export { initialState, actions, orderDetailsReducer };
