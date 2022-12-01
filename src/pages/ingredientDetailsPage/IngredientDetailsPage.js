import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IngredientDetails } from '../../components/Popups/IngredientDetails';
import { setPopupData, resetPopupData } from '../../services/actions/ingredientPupup';
import { getIngredientsFromApi } from '../../services/actions/ingredients';

const IngredientDetailsPage = () => {

  const { id } = useParams();

  const { ingredients, popupIngredient, show } = useSelector(state=>({
    ingredients: state.ingredients.ingredients,
    popupIngredient: state.ingredientPopup.ingredient,
    show: state.ingredientPopup.showPopup
  }));

  const dispatch = useDispatch();

  useEffect(()=>{

    if (ingredients.length == 0) {
      dispatch(getIngredientsFromApi());
    }
    const ingredient = ingredients.find(item => item._id === id)

    dispatch(setPopupData(ingredient));
  }, [ingredients, id]);

  return (
    popupIngredient ? (<IngredientDetails />) : null

  )
}

export  { IngredientDetailsPage }
