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
  ...IngredientType
};

const CompositionListType =  PropTypes.arrayOf(PropTypes.shape(IngredientCompositionType));

const DataTreeType = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape(IngredientType)).isRequired
}

const IngredientCardType = {
  data: PropTypes.shape(IngredientType).isRequired,
  usageCount: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

const IngredientListType = {
  data: PropTypes.shape(DataTreeType).isRequired,
  burgerComposition: CompositionListType.isRequired
};

const IngredientsTypeList = {
  dataTree: PropTypes.arrayOf(PropTypes.shape(DataTreeType)).isRequired,
  burgerComposition: CompositionListType.isRequired,
  addBun: PropTypes.func.isRequired,
  addIngredient: PropTypes.func.isRequired
}

const ConstructorItemType = {
  item: PropTypes.shape(IngredientCompositionType).isRequired,
  isLocked: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', undefined])
};


export {
  DataTreeType,
  IngredientType,
  IngredientsTypeList,
  IngredientListType,
  CompositionListType,
  IngredientCompositionType,
  IngredientCardType,
  ConstructorItemType,
}
