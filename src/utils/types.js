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

const DraggableItem = {
  id: PropTypes.string.isRequired,
  ingredient: PropTypes.shape(IngredientCompositionType).isRequired
}

const CompositionListType =  PropTypes.arrayOf(PropTypes.shape(DraggableItem));

const DataTreeType = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape(IngredientType)).isRequired
}

const IngredientCardType = {
  data: PropTypes.shape(IngredientType).isRequired,
  usageCount: PropTypes.number.isRequired
}

const IngredientListType = {
  data: PropTypes.shape(DataTreeType).isRequired,
  burgerComposition: CompositionListType.isRequired
};

const IngredientsTypeList = {
  dataTree: PropTypes.arrayOf(PropTypes.shape(DataTreeType)).isRequired,
  burgerComposition: CompositionListType.isRequired,
  firstTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired
}

const BunType = {
  bunItem:  PropTypes.shape(IngredientCompositionType).isRequired,
  position: PropTypes.oneOf(['top', 'bottom', undefined])
}



const ConstructorItemType = {
  item: PropTypes.shape(DraggableItem).isRequired,
  removeAction: PropTypes.func.isRequired,

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
  BunType,
}
