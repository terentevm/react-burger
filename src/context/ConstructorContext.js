import { createContext, useReducer } from 'react';
import { initialState, constructorReducer, actions } from '../reducers/constructor';

const ConstructorContext = createContext();

const ConstructorProvider = ({ children }) => {

  const [state, dispatch] = useReducer(constructorReducer, initialState);
  const { bun, ingredients, price } = state;
  const value = {
    bun: bun,
    ingredients: ingredients,
    price: price,
    addBun: (bun) => {
      dispatch({ type: actions.ADD_BUN, payload: bun })
    },
    addIngredient: (ingredient) => {
      dispatch({ type: actions.ADD_INGREDIENT, payload: ingredient })
    },
    removeIngredient: (ingredient) => {
      dispatch({ type: actions.REMOVE_INGREDIENT, payload: ingredient })
    }
  }

  return (
    <ConstructorContext.Provider value={value}>{ children }</ConstructorContext.Provider>
  )

}

export { ConstructorProvider, ConstructorContext };
