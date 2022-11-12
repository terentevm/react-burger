import React, {useEffect, useState} from 'react';

import AppHeader from '../AppHeader';
import { BurgerIngredients } from '../BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor';
import { transformArrayToTree } from "../../utils/transformData";
import { getIngredients } from "../../api";
import { IngredientsProvider, ConstructorProvider, OrderDetailsProvider } from '../../context';

import style from './app.module.css';
const App = React.memo(() => {

  return (
    <>
      <AppHeader />
      <main className={style.content}>
       <ConstructorProvider>
          <IngredientsProvider>
            <BurgerIngredients />
          </IngredientsProvider>
         <OrderDetailsProvider>
          <BurgerConstructor />
         </OrderDetailsProvider>
        </ConstructorProvider>
      </main>
    </>
  );
});

export { App };
