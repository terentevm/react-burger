import { createContext, useReducer } from 'react';
import { initialState, orderDetailsReducer, actions } from '../reducers/orderDetails';

const OrderDetailsContext = createContext();

const OrderDetailsProvider = ({ children }) => {

  const [state, dispatch] = useReducer(orderDetailsReducer, initialState);
  const value = {
    name: state.name,
    orderNumber: state.orderNumber,
    setOrderData: (orderData) => {
      dispatch({type: actions.SET_ORDER_DATA, payload: orderData})
    }
  }

  return (
    <OrderDetailsContext.Provider value={value}>{ children }</OrderDetailsContext.Provider>
  )

}

export { OrderDetailsProvider, OrderDetailsContext }
