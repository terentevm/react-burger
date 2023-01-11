import React, { useCallback, useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import AppHeader from '../AppHeader';
import { getIngredientsFromApi} from "../../services/actions/ingredients";
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
import { TModalState } from "../../types";
import { Modal } from '../Modal';
import { ProtectedPage, NonAuthPage } from '../../router';

import style from './app.module.css';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
const App = () => {
  const location = useLocation();
  const history = useHistory();
  const state = location.state as TModalState;
  const dispatch = useThunkDispatch();
  const background = state && state.background;

  useEffect(()=>{
    dispatch(getIngredientsFromApi());
  }, [])

  const goBack = useCallback(() => {
    history.goBack();
  }, []);

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
            <Route path="/ingredients/:id" children={<IngredientDetailsPage mode="page"/>} />`
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          {background && (
            <Route
              path='/ingredients/:id'
              children={
                <Modal visible={true} onClose={goBack}>
                  <IngredientDetailsPage mode="modal" />
                </Modal>
              }
            />
          )}
      </main>
    </>
  );
};

export { App };
