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
  ...IngredientType,
  isLocked: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', '']).isRequired,
};

const CompositionListType =  PropTypes.arrayOf(PropTypes.shape(IngredientCompositionType));

const DataTreeType = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape(IngredientType)).isRequired
}

const BurgerIngredientsType = {
  dataTree: PropTypes.arrayOf(PropTypes.shape(DataTreeType)).isRequired,
  burgerComposition: CompositionListType.isRequired
}

const IngredientCardType = {
 data: PropTypes.shape(IngredientType).isRequired,
 usageCount: PropTypes.number.isRequired
}

const IngredientListType = {
  data: PropTypes.shape(DataTreeType).isRequired,
  burgerComposition: CompositionListType.isRequired
};

const ConstructorItemType = {
  item: PropTypes.shape(IngredientCompositionType).isRequired
};

const BurgerConstructorType = {
  burgerComposition: CompositionListType.isRequired
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
