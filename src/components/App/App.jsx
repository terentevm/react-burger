import React, {useEffect, useState} from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import AppHeader from '../AppHeader';
import { BurgerIngredients } from '../BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor';
import { transformArrayToTree } from "../../utils/transformData";
import { getIngredients } from "../../api";

import style from './app.module.css';
const App = React.memo(() => {

  return (
    <>
      <AppHeader />
      <main className={style.content}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    </>
  );
});

export { App };
