import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IngredientDetails } from '../../components/Popups/IngredientDetails';
import { setPopupData } from '../../services/actions/ingredientPupup';
import { IIdParams } from '../../types';
import { RootState } from '../../services/reducers';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import styles from './details.module.css';

type Props = {
  mode: string
}

const IngredientDetailsPage = ({ mode="modal" } : Props) => {

  const { id } = useParams<IIdParams>();

  const { ingredients, popupIngredient } = useSelector((state: RootState)=>({
    ingredients: state.ingredients.ingredients,
    popupIngredient: state.ingredientPopup.ingredient,
  }));

  const dispatch = useThunkDispatch();

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

export  { IngredientDetailsPage }