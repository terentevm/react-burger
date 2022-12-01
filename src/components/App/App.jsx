import React, { useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import AppHeader from '../AppHeader';
import { BurgerIngredients } from '../BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor';
import { transformArrayToTree } from "../../utils/transformData";
import { getIngredients } from "../../api";
import {
  MainPage,
  RegisterPage,
  ProfilePage,
  LoginPage,
  ForgotPassword,
  ResetPassword,
  IngredientDetailsPage,
  NotFoundPage
} from '../../pages';
import { Modal } from '../Modal';
import { ProtectedPage, NonAuthPage } from '../../router';

import style from './app.module.css';
const App = () => {
  let location = useLocation();
  let history = useHistory();
  let background = location.state && location.state.background;

  const goBack = useCallback(() => {
    history.goBack();
  });

  return (
    <>
      <AppHeader />
      <main className={style.content}>
          <Switch  location={background || location}>
            <Route path="/" exact={true}>
              <MainPage />
            </Route>
            <NonAuthPage path="/login" exact={true}>
              <LoginPage />
            </NonAuthPage>
            <NonAuthPage path="/register" exact={true}>
             <RegisterPage />
            </NonAuthPage>
            <NonAuthPage path="/forgot-password" exact={true}>
             <ForgotPassword />
            </NonAuthPage>
            <NonAuthPage path="/reset-password" exact={true}>
             <ResetPassword />
            </NonAuthPage>
            <ProtectedPage path="/profile">
              <ProfilePage />
            </ProtectedPage>
            <Route path="/ingredients/:id" children={<IngredientDetailsPage />} />`
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          {background && (
            <Route
              path='/ingredients/:id'
              children={
                <Modal visible={true} onClose={goBack}>
                  <IngredientDetailsPage />
                </Modal>
              }
            />
          )}
      </main>
    </>
  );
};

export { App };
