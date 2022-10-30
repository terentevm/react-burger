import PropTypes from 'prop-types';

const IngredientType = {
  '_id': PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins:PropTypes.number.isRequired,
  fat:PropTypes.number.isRequired,
  carbohydrates:PropTypes.number.isRequired,
  calories:PropTypes.number.isRequired,
  price:PropTypes.number.isRequired,
  image:PropTypes.string.isRequired,
  "image_mobile":PropTypes.string.isRequired,
  "image_large":PropTypes.string.isRequired,
  "__v":PropTypes.number
};

const IngredientCompositionType = {
  '_id': PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins:PropTypes.number.isRequired,
  fat:PropTypes.number.isRequired,
  carbohydrates:PropTypes.number.isRequired,
  calories:PropTypes.number.isRequired,
  price:PropTypes.number.isRequired,
  image:PropTypes.string.isRequired,
  "image_mobile":PropTypes.string.isRequired,
  "image_large":PropTypes.string.isRequired,
  "__v":PropTypes.number,
  isLocked: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom', '']),
};

const CompositionListType =  PropTypes.arrayOf(PropTypes.shape(IngredientCompositionType));

const DataTreeType = {
  type: PropTypes.string,
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape(IngredientType))
}

const BurgerIngredientsType = {
  dataTree: PropTypes.arrayOf(PropTypes.shape(DataTreeType)),
  burgerComposition: CompositionListType
}

const IngredientCardType = {
 data: PropTypes.shape(IngredientType),
 usageCount: PropTypes.number
}

const IngredientListType = {
  data: PropTypes.shape(DataTreeType),
  burgerComposition: CompositionListType
};

const ConstructorItemType = {
  item: PropTypes.shape(IngredientCompositionType)
};

const BurgerConstructorType = {
  burgerComposition: CompositionListType
}
export {
  DataTreeType,
  IngredientType,
  IngredientListType,
  CompositionListType,
  IngredientCompositionType,
  BurgerIngredientsType,
  IngredientCardType,
  ConstructorItemType,
  BurgerConstructorType
}