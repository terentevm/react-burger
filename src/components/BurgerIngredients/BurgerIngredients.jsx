import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { IngredientCard } from "./IngredientCard";
import { IngredientListType, IngredientsTypeList } from '../../utils/types';

import { transformArrayToTree } from "../../utils/transformData";

import styles from './ingredients.module.css';

const TypeItem = ({ data, burgerComposition }) => {

  const currentBun = useSelector(state=>state.burgerConstructor.bun);

  const getUsageCount = (ingredient) => {

    let count = 0;

    if (ingredient.type === 'bun') {
      count = currentBun && currentBun._id === ingredient._id ? 2 : 0;
    } else {
      count = burgerComposition.filter(item => item.ingredient._id === ingredient._id).length;
    }

    return count;
  }

  return (
    <>
      <li className={`${styles["type-item"]} mt-10`} id={data.type}>
        <h3 className="text text_type_main-medium">{ data.title }</h3>
        <ul className={styles["ingredients-list"]}>
          { data.list.map((item) => (
            <IngredientCard
              key = {item._id}
              data ={ item }
              usageCount={getUsageCount(item)}
            />

          ))}
        </ul>
      </li>
    </>
  );
};


const List = ({ dataTree, burgerComposition, firstTab, changeTab }) => {

  const [currentTab, setCurrentTab] = useState('bun');
  const [parentY, setParentY] = useState(0);
  const ulRef = useRef();

  useEffect(()=>{

    const calculateNewTabName = ()=>{
      const childern = ulRef.current.childNodes;

      let newCurrentTab = childern[0].id;

      let prevDiff = undefined;
      for (const li of childern) {

        if (li.tagName !== 'LI') {
          continue;
        }
        const { y } = li.getBoundingClientRect();
        let diff = Math.abs(y - parentY) ;
        if (!prevDiff) {
          prevDiff = diff;
          continue;
        }

        if (diff < prevDiff ) {

          prevDiff =  diff;
          newCurrentTab = li.id;

        }
      }

      setCurrentTab(newCurrentTab);
    }

    const scrollHandler = () => setTimeout(calculateNewTabName, 60);

    ulRef.current?.addEventListener('scroll', scrollHandler);

    return ()=>{
      ulRef.current?.removeEventListener('scroll', scrollHandler);
    }
  },[parentY])

  useEffect(()=>{
    const { y } = ulRef.current.getBoundingClientRect();
    setParentY(y);
  },[useRef.current])

  useEffect(()=>{
    changeTab(currentTab);
  },[currentTab])


  return (
    <ul className={styles.list} ref={ulRef}>
      { dataTree.map((data, ind) =>(
        <TypeItem
          key={`${data.type}_${ind}`}
          data={data}
          burgerComposition={burgerComposition}
        />
      ))}
      <div className={styles.anchor}></div>
    </ul>

  )
}

const BurgerIngredients = () => {

  const [currentTab, setCurrentTab] = useState("bun");

  const { dataTree, burgerComposition } = useSelector(state=>({
    dataTree: transformArrayToTree(state.ingredients.ingredients),
    burgerComposition: state.burgerConstructor.ingredients
  }));

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
    <List
      dataTree={dataTree}
      burgerComposition={burgerComposition}
      firstTab={currentTab}
      changeTab={setCurrentTab}
    />
    </section>
  );
}

TypeItem.propTypes = IngredientListType;
List.propTypes = IngredientsTypeList;

export { BurgerIngredients };
