import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { setIsUserRequest } from '../../services/actions/auth';
import { resetPasswordRequest } from '../../api';
import styles from './reset.module.css';

const ResetPassword = () => {
  const location = useLocation();
  const history = useHistory();

  const prevUrl = location.state?.from?.pathname || undefined;

  if (prevUrl === undefined) {
    history.push('/login');
  }

  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const { isAuth, userRequest } = useSelector(state=>({
    isAuth: state.auth.isAuth,
    userRequest: state.auth.userRequest
  }));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setIsUserRequest(true));
    resetPasswordRequest({password: password, token: code}).then(res=>{
      history.push('/login');
    }).catch(err=>{
      console.log(err);
      alert(err?.message || "Произошла ошибка. Попробуйте еще раз!")
    }).finally(()=>{
      dispatch(setIsUserRequest(false));
    })
  }

  return (
    <div className={styles.forgot}>
      <form className={styles.forgot__form} onSubmit={onSubmitHandler}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <PasswordInput
          name={'password'}
          placeholder="Введите новый пароль"
          extraClass="mb-2"
          value={password}
          disabled={userRequest}
          onChange={e=>setPassword(e.target.value)}
        />
        <Input
          name="code"
          placeholder="Введите код из письма"
          value={code}
          onChange={e=>setCode(e.target.value)}
          disabled={userRequest}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={userRequest || !password || !code}>
          Сохранить
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

export { ResetPassword }
