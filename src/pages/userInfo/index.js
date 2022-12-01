import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../services/actions/auth';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUserRequest} from "../../api";
import styles from './user.module.css';

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth.user);

  const [ userRequest, setUserRequest ] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameDisabled, setNameDisabled] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [passwordDisabled, setPasswordDisabled] = useState(true);

  const [dataIsModified, setDataIsModified] = useState(false);

  useEffect(()=>{
    const { name, email } = user;
    setName(name);
    setEmail(email);
  }, [user]);

  useEffect(()=>{
    const dataWasModified =
      user.name !== name
      || user.email !== email
      || password !== "";
    setDataIsModified(dataWasModified);

  }, [name, email, password]);

  const nameOnChange = (e) => {
    setName(e.target.value);
  }

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  }

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  }

  const onSubmitFormHandler = (event) => {

    event.preventDefault();

    const newUserData = {};

    if (name !== user.name && name !== "") {
      newUserData.name = name;
    }

    if (email !== user.email && email !== "") {
      newUserData.email = email;
    }

    if (password !== "") {
      newUserData.email = email;
    }

    setUserRequest(true);

    updateUserRequest(newUserData).then(res=>{
      setDataIsModified(false);
    }).catch(err=>{
      alert(err.message ? err.message : "Ошибка сохранение данных");
    }).finally(()=>{
      setUserRequest(false);
    })
  }

  return  (
    <form className={styles.user} onSubmit={onSubmitFormHandler}>
      <Input
        name="name"
        placeholder="Имя"
        value={name}
        disabled={nameDisabled}
        icon="EditIcon"
        onIconClick={()=>setNameDisabled(false)}
        onChange={nameOnChange}
      />
      <Input
        name="email"
        placeholder="E-mail"
        value={email}
        disabled={emailDisabled}
        icon="EditIcon"
        onIconClick={()=>setEmailDisabled(false)}
        onChange={emailOnChange}
      />
      <PasswordInput
        name={'password'}
        placeholder="Пароль"
        value={password}
        disabled={passwordDisabled}
        icon="EditIcon"
        onIconClick={()=>setPasswordDisabled(false)}
        onChange={passwordOnChange}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="medium"
        disabled={!dataIsModified || userRequest}
        style={{ width: "480px"}}
      >
        Сохранить
      </Button>
    </form>
  )
}

export { UserInfo }