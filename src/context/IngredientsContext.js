import { createContext, useReducer } from 'react';
import { initialState, ingredientsReducer, actions } from '../reducers/ingredients';

const IngredientsContext = createContext();

const IngredientsProvider = ({ children }) => {

  const [state, dispatch] = useReducer(ingredientsReducer, initialState);
  const value = {
    dataTree: state.dataTree,
    setDataTree: (dataTree) => {
      dispatch({type: actions.SET_DATA_TREE, payload: dataTree})
    }
  }

  return (
    <IngredientsContext.Provider value={value}>{ children }</IngredientsContext.Provider>
  )

}

export { IngredientsProvider, IngredientsContext }
