import styles from './constructor.module.css';
import { ConstructorItem } from './ConstructorItem';
import { ConstructorContext } from '../../context';
import {useContext} from "react";
const IngredientsList = () => {
  const {bun, ingredients,  removeIngredient } = useContext(ConstructorContext);
  return (
    <div className={styles.constructor__list}>

        {
          bun
            ? (<ConstructorItem item={bun} isLocked={true} position="top"/>)
            : (
              <div className={`${styles.constructor__bun} ${styles.constructor__bun_top}`}>
                <p className={`text text_type_main-default`}>Выберите булку</p>
              </div>
            )
        }

      {
        ingredients.length > 0
        ? <ul className={styles.constructor__ingredients}>
            {ingredients.map((item, ind) => (
              <ConstructorItem
                key={`${item._id}_${ind}`}
                item={item}
                isLocked={false}
                removeAction={removeIngredient}
              />
            ))}
          </ul>
        : <div className={styles.constructor__placeholder}>
        <p className={`text text_type_main-default`}>Выберите начинку</p>
          </div>
      }
      {
        bun
          ? (<ConstructorItem item={bun} isLocked={true} position="bottom"/>)
          : (
            <div className={`${styles.constructor__bun} ${styles.constructor__bun_bottom}`}>
              <p className={`text text_type_main-default`}>Выберите булку</p>
            </div>
          )
      }
    </div>
  )
}

export { IngredientsList };
