import { Bun } from './Bun';
import { ConstructorItem } from './ConstructorItem';
import { useDispatch } from 'react-redux';
import { DropArea } from '../DragAndDrop';
import {
  addBun,
  addIngredient,
  removeIngredient
} from '../../services/actions/constructor';
import { TIngredient, TItemWithId } from '../../types';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './constructor.module.css';

const IngredientsList = () => {

  const dispatch = useDispatch();

  const { bun, ingredients } = useAppSelector((state)=>({
    bun: state.burgerConstructor.bun,
    ingredients: state.burgerConstructor.ingredients,
  }));

  const removeIngredientFromConstructor = (item: TItemWithId) => {
    dispatch(removeIngredient(item.id));
  }

  const bunOnDrop = (bun: TIngredient) => {
    dispatch(addBun(bun));
  }

  const ingredientOnDrop = (item: TIngredient) => {
    dispatch(addIngredient(item));
  }

  return (
    <div className={styles.constructor__list}>
      <DropArea type="bun" onDropHandler={bunOnDrop}>
        {
          bun
            ? (<Bun bunItem={bun}  position="top" />)
            : (
              <div className={`${styles.constructor__bun} ${styles.constructor__bun_top}`}>
                <p className={`text text_type_main-default`}>Выберите булку</p>
              </div>
            )
        }
      </DropArea>
      <DropArea type="ingredient" className={styles.constructor__drop} onDropHandler={ingredientOnDrop}>

      {
        ingredients.length > 0
        ? <ul className={styles.constructor__ingredients} >
            {ingredients.map((item, ind) => (
              <ConstructorItem
                key={item.id}
                item={item}
                removeAction={removeIngredientFromConstructor}
              />
            ))}
          </ul>
        : <div className={styles.constructor__placeholder} >
            <p className={`text text_type_main-default`}>Выберите начинку</p>
          </div>
      }
      </DropArea>
      <DropArea type="bun" onDropHandler={bunOnDrop}>
      {
        bun
          ? (<Bun bunItem={bun}  position="bottom"/>)
          : (
            <div className={`${styles.constructor__bun} ${styles.constructor__bun_bottom}`}>
              <p className={`text text_type_main-default`}>Выберите булку</p>
            </div>
          )
      }
      </DropArea>
    </div>
  )
}

export { IngredientsList };
