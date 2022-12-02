import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IngredientDetails } from '../../components/Popups/IngredientDetails';
import { setPopupData } from '../../services/actions/ingredientPupup';
import styles from './details.module.css';
import PropTypes from "prop-types";

const IngredientDetailsPage = ({ mode="modal" }) => {

  const { id } = useParams();

  const { ingredients, popupIngredient, show } = useSelector(state=>({
    ingredients: state.ingredients.ingredients,
    popupIngredient: state.ingredientPopup.ingredient,
    show: state.ingredientPopup.showPopup
  }));

  const dispatch = useDispatch();

  useEffect(()=>{

    const ingredient = ingredients.find(item => item._id === id)

    dispatch(setPopupData(ingredient));
  }, [ingredients, id]);

  return (
    popupIngredient ? (
      <div className={styles.details}>
        <IngredientDetails mode={mode} />
      </div>
    ) : null

  )
}

IngredientDetailsPage.propTypes = {
  mode: PropTypes.string
}

export  { IngredientDetailsPage }
