import React, {useEffect, useState} from 'react';

import AppHeader from '../AppHeader';
import { BurgerIngredients } from '../BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor';
import burgerCompositionData from "../../utils/burgerComposition";
import { transformArrayToTree } from "../../utils/transformData";
import { getIngredients } from "../../api";

import style from './app.module.css';
const App = React.memo(() => {

  const [dataTree, setDataTree] =  useState([]);
  const [burgerComposition] = useState(burgerCompositionData);

  useEffect(()=>{
    getIngredients()
      .then(data=>setDataTree(transformArrayToTree(data)))
      .catch(e=>setDataTree([]));
  }, []);

  return (
    <>
      <AppHeader />
      <main className={style.content}>
        <BurgerIngredients dataTree={ dataTree } burgerComposition={burgerComposition}/>
        <BurgerConstructor burgerComposition={burgerComposition}/>
      </main>
    </>
  );
});

export { App };
