import PropTypes from "prop-types";
import { IngredientType } from '../../utils/types';
const PopupType = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const IngredientDetailsType = {
  ...PopupType,
  ingredient: PropTypes.shape(IngredientType)
};

const OrderDetailsType = {
  ...PopupType
};

export { IngredientDetailsType, OrderDetailsType };
