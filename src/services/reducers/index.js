import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredientsReducer';
import { constructorReducer } from './constructorReducer';
import { dragAndDropReducer } from './dargAndDropReducer';
import { orderDetailsReducer } from './orderDetailsReducer';
import { ingredientPopupReducer } from './ingredientPopupReducer';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  dragAndDrop: dragAndDropReducer,
  orderDetails: orderDetailsReducer,
  ingredientPopup: ingredientPopupReducer
});

export { rootReducer };