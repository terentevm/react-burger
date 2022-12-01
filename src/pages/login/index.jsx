import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { loginRequest } from '../../api';
import { setIsUserRequest, setUserData } from '../../services/actions/auth';

import styles from './login.module.css';
const LoginPage = () => {
  const dispatch = useDispatch();
  const { isAuth, userRequest } = useSelector(state=>({
    isAuth: state.auth.isAuth,
    userRequest: state.auth.userRequest
  }));

  const location = useLocation();
  const history = useHistory();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = useCallback((event)=>{
    event.preventDefault();
    dispatch(setIsUserRequest(true));
    loginRequest({
      email: email,
      password: password
    }).then(res => {
      dispatch(setUserData(res))
    }).catch(err=>{
      alert(err?.message || "Ошибка входа. Проверьте введенные данные")
    }).finally(()=>{
      dispatch(setIsUserRequest(false));
    })
  }, [email, password]);

  return (
    <div className={styles.login}>
      <form className={styles.login__form} onSubmit={onSubmitHandler}>
        <h1 className="text text_type_main-medium">Вход</h1>
        <Input
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          disabled={userRequest}
        />
        <PasswordInput
          name={'password'}
          extraClass="mb-2"
          value={password}
          disabled={userRequest}
          onChange={e=>setPassword(e.target.value)}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={userRequest || !email || !password}
        >
          Войти
        </Button>
      </form>
      <div className={styles.login__footer}>
        <div className={styles.login__footer_item}>
          <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</p>
          <Link
            to={{ pathname:"/register", state: location.state}}
            className="text text_type_main-default"
          >
            Зарегистрироваться
          </Link>
        </div>
        <div className={styles.login__footer_item}>
          <p className="text text_type_main-default text_color_inactive">Забыли пароль?</p>
          <Link to="/forgot-password" className="text text_type_main-default">Восстановить пароль</Link>
        </div>
      </div>

    </div>
  )
}

export { LoginPage };
