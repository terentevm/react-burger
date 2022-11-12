const initialState = {
  dataTree: []
}

const actions = {
  SET_DATA_TREE: 'SET_DATA_TREE'
}

const ingredientsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SET_DATA_TREE:
      return {dataTree: payload};
      break;

    default:
      return state;
      break;
  }
}

export {initialState, ingredientsReducer, actions};