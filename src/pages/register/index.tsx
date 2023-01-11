import { FormEvent, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { register } from '../../services/actions/auth';
import { useForm } from '../../hooks/useForm';
import styles from './register.module.css';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { TUserData } from '../../types';
import { useAppSelector } from '../../hooks/useAppSelector';

const RegisterPage = () => {
  const dispatch = useThunkDispatch();

  const { userRequest } = useAppSelector((state) => ({
    userRequest: state.auth.userRequest
  }));
  const { values, handleChange } = useForm<TUserData>({ name: '', email: '', password: '' });

  const { name, email, password } = values;

  const onSubmitHandler = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(register({
      name: name,
      email: email,
      password: password
    }))
  }, [name, email, password]);

  return (
    <div className={styles.register}>
      <form className={styles.register__form} onSubmit={onSubmitHandler}>
        <h1 className="text text_type_main-medium">Регистрация</h1>
        <Input
          name="name"
          placeholder="Имя"
          value={name}
          onChange={handleChange}
          disabled={userRequest}
        />
        <Input
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
          disabled={userRequest}
        />
        <PasswordInput
          name={'password'}
          value={password}
          disabled={userRequest}
          onChange={handleChange}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          disabled={userRequest || !name || !email || !password}
        >
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.register__bottom}>
        <p className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</p>
        <Link to="/login" className="text text_type_main-default">Войти</Link>
      </div>
    </div>
  )
}

export { RegisterPage };
