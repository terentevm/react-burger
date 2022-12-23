import { TDndAction, TDndState, DndEnum } from "../types";

const initialState : TDndState = {
  draggedItem: null
}

const dragAndDropReducer = (state: TDndState = initialState, action: TDndAction) : TDndState => {
 const { type, payload } = action;

 switch (type) {
   case DndEnum.SET_DRAGGED_ITEM: {
     return {draggedItem: payload};
     break;
   }
   default:
     return state;
 }
}

export { dragAndDropReducer };
