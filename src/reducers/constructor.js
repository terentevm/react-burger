const initialState = {
  bun: null,
  ingredients: [],
  price: 0
}

const actions = {
  ADD_BUN: 'ADD_BUN',
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  REMOVE_INGREDIENT: 'REMOVE_INGREDIENT',
}

const _calculateTotalPrice = (ingredients, bun) => {
  const bunTotal = bun ? bun.price * 2 : 0;
  return bunTotal + ingredients.reduce((total, item) =>{
    return total +  (item.isLocked ? item.price / 2 : item.price);
  }, 0);
}

const constructorReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.ADD_BUN:
      return {...state, bun: payload, price: _calculateTotalPrice(state.ingredients, payload)};
      break;
    case  actions.ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, payload]
      return {...state, ingredients: newIngredients, price: _calculateTotalPrice(newIngredients, state.bun)};
      break;
    case actions.REMOVE_INGREDIENT:
      const ingredientIndex = state.ingredients.findIndex(item=>item._id === payload._id);

      if (ingredientIndex !== -1) {
        const newIngredients = [
          ...state.ingredients.slice(0, ingredientIndex),
          ...state.ingredients.slice(ingredientIndex + 1, state.ingredients.length)];

        return {...state, ingredients: newIngredients, price: _calculateTotalPrice(newIngredients, state.bun)};
      } else {
        return state;
      }

      break;
    default:
      return state;
      break;
  }
}

export { initialState, constructorReducer, actions };
