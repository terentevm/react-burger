import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { setIsUserRequest } from '../../services/actions/auth';
import { forgotPasswordRequest } from '../../api';

import styles from './forgot.module.css';

const ForgotPassword = () => {
  const location = useLocation();
  const history = useHistory();

  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { isAuth, userRequest } = useSelector(state=>({
    isAuth: state.auth.isAuth,
    userRequest: state.auth.userRequest
  }));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setIsUserRequest(true));
    forgotPasswordRequest(email).then(res=>{
      history.push('/reset-password', {from:location})
    }).catch(err=>{
      prompt("Произошла ошибка. Попробуйте еще раз!")
    }).finally(()=>{
      dispatch(setIsUserRequest(false));
    })
  }

  return (
    <div className={styles.forgot}>
      <form className={styles.forgot__form} onSubmit={onSubmitHandler}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <Input
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          disabled={userRequest}
        />
        <Button htmlType="submit" type="primary" size="medium" disabled={userRequest || !email}>
          Восстановить
        </Button>
      </form>
      <div className={styles.forgot__footer}>
        <div className={styles.forgot__footer_item}>
          <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
          <Link
            to={{ pathname:"/login", state: location.state}}
            className="text text_type_main-default"
          >
            Войти
          </Link>
        </div>
      </div>

    </div>
  )
}

export { ForgotPassword }
