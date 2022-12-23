import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredientsReducer';
import { constructorReducer } from './constructorReducer';
import { dragAndDropReducer } from './dargAndDropReducer';
import { orderDetailsReducer } from './orderDetailsReducer';
import { ingredientPopupReducer } from './ingredientPopupReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  dragAndDrop: dragAndDropReducer,
  orderDetails: orderDetailsReducer,
  ingredientPopup: ingredientPopupReducer
});

export type RootState = ReturnType<typeof rootReducer>;
