import { useCallback, FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { login } from '../../services/actions/auth';
import { useForm } from "../../hooks/useForm";
import styles from './login.module.css';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { TLoginData } from '../../types';
import { useAppSelector } from '../../hooks/useAppSelector';

const LoginPage = () => {
  const dispatch = useThunkDispatch();
  const { userRequest } = useAppSelector((state)=>({
    userRequest: state.auth.userRequest
  }));

  const location = useLocation();

  const { values, handleChange } = useForm<TLoginData>({email: "", password: ""});

  const { email, password } : TLoginData = values;

  const onSubmitHandler = useCallback((event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    dispatch(login({
      email: email,
      password: password
    }));
  }, [email, password]);

  return (
    <div className={styles.login}>
      <form className={styles.login__form} onSubmit={onSubmitHandler}>
        <h1 className="text text_type_main-medium">Вход</h1>
        <Input
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
          disabled={userRequest}
        />
        <PasswordInput
          name={'password'}
          extraClass="mb-2"
          value={password}
          disabled={userRequest}
          onChange={handleChange}
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
