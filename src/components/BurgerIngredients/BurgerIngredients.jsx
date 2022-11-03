import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { IngredientCard } from "./IngredientCard";
import { IngredientListType, BurgerIngredientsType } from '../../utils/types';
import styles from './ingredients.module.css';
import { Modal } from "../Modal";
import { IngredientDetails } from '../Popups/IngredientDetails';

const TypeItem = ({ data, burgerComposition }) => {

  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState(null);

  const getUsageCount = (ingredient) => {
    let count = burgerComposition.filter(item => item._id === ingredient._id).length;

    if (ingredient.type === 'bun') {
      count = count / 2;
    }

    return count;
  }

  const ingredientOnClick = (item) => {
    setPopupItem(item);
    setShowPopup(true);
  }

  const destroyPopup = () => {
    setShowPopup(false);
    setPopupItem(null);
  }

  return (
    <>
      <li className={`${styles["type-item"]} mt-10`} id={data.type}>
        <h3 className="text text_type_main-medium">{ data.title }</h3>
        <ul className={styles["ingredients-list"]}>
          { data.list.map((item) =>(
            <IngredientCard
              key = {item._id}
              data ={ item }
              usageCount={getUsageCount(item)}
              onClick={()=>ingredientOnClick(item)}
            />
          ))}
        </ul>
      </li>
      { showPopup &&
        <Modal onClose={destroyPopup} visible={showPopup} >
          <IngredientDetails ingredient={popupItem} />
        </Modal>
      }
    </>
  );
};


const List = ({ dataTree, burgerComposition}) => {
  return (
    <ul className={styles.list}>
      { dataTree.map((data, ind) =>(
        <TypeItem key={`${data.type}_${ind}`} data={data} burgerComposition={burgerComposition}/>
      ))}
      <div className={styles.anchor}></div>
    </ul>

  )
}

const BurgerIngredients = ({ dataTree, burgerComposition }) => {

  const [currentTab, setCurrentTab] = useState("bun");

  return (
    <section className={`${styles.section} pt-10`}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <div className={`${styles.ingredients__tabs} mt-5`} >
        {
          dataTree.map(treeItem => (
            <a key={treeItem.type} href={`#${treeItem.type}`} className={styles['tab-link']}>
              <Tab
                value={treeItem.type}
                active={currentTab === `${treeItem.type}`}
                onClick={setCurrentTab}
              >
                {treeItem.title}
              </Tab>
            </a>
          ))
        }
    </div>
    <List dataTree={dataTree} burgerComposition={burgerComposition}/>
    </section>
  );
}

TypeItem.propTypes = IngredientListType;
List.propTypes = BurgerIngredientsType;
BurgerIngredients.propTypes = BurgerIngredientsType;

export { BurgerIngredients };
