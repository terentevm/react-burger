import { SET_DRAGGED_ITEM } from '../actions/dragAndDrop';

const initialState = {
  draggedItem: null
}

const dragAndDropReducer = (state = initialState, action) => {
 const { type, payload } = action;

 switch (type) {
   case SET_DRAGGED_ITEM: {
     return {draggedItem: payload};
     break;
   }
   default:
     return state;
 }
}

export { dragAndDropReducer };
