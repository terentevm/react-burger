import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { registerRequest } from '../../api';
import { setUserData } from '../../services/actions/auth';

import styles from './register.module.css';

const RegisterPage = () => {

  const [userRequest, setUserRequest] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = useCallback((event)=>{
    event.preventDefault();
    setUserRequest(true);

    registerRequest({
      name: name,
      email: email,
      password: password
    }).then(res => {
      setUserData(res);
    }).catch(err=>{
      alert(err.message ? err.message : "Ошибка регистрации. Проверьте введенные данные")
    }).finally(()=>{
      setUserRequest(false);
    })
  }, [name, email, password]);

  return (
    <div className={styles.register}>
      <form className={styles.register__form} onSubmit={onSubmitHandler}>
        <h1 className="text text_type_main-medium">Регистрация</h1>
        <Input
          name="name"
          placeholder="Имя"
          value={name}
          onChange={e=>setName(e.target.value)}
          disabled={userRequest}
        />
        <Input
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          disabled={userRequest}
        />
        <PasswordInput
          name={'password'}
          value={password}
          disabled={userRequest}
          onChange={e=>setPassword(e.target.value)}
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
