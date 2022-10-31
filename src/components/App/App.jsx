import React, {useState} from 'react';

import AppHeader from '../AppHeader';
import { BurgerIngredients } from '../BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor';
import data from "../../utils/data";
import burgerCompositionData from "../../utils/burgerComposition";
import { transformArrayToTree } from "../../utils/transformData";

import style from './app.module.css';
const App = () => {

  const [dataTree] =  useState(transformArrayToTree(data));
  const [burgerComposition] = useState(burgerCompositionData);
  return (
    <>
      <AppHeader />
      <main className={style.content}>
        <BurgerIngredients dataTree={ dataTree } burgerComposition={burgerComposition}/>
        <BurgerConstructor burgerComposition={burgerComposition}/>
      </main>
    </>
  );
}

export { App };
