import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { register } from '../../services/actions/auth';
import { useForm } from "../../hooks/useForm";
import styles from './register.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const { userRequest } = useSelector(state=>({
    userRequest: state.auth.userRequest
  }));
  const { values, handleChange } = useForm({name: "", email: "", password: ""});

  const { name, email, password } = values;

  const onSubmitHandler = useCallback((event)=>{
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
