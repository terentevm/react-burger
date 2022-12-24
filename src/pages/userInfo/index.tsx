import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { updateUserData } from "../../services/actions/auth";
import { useForm } from "../../hooks/useForm";
import styles from './user.module.css';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { RootState } from '../../services/reducers';
import { TUserData } from '../../types';
import { useAppSelector } from '../../hooks/useAppSelector';

const UserInfo = () => {
  const dispatch = useThunkDispatch();
  const user = useAppSelector((state)=>state.auth.user) as TUserData;
  const userRequest = useAppSelector((state)=>state.auth.userRequest);

  const { values, setValues, handleChange} = useForm<TUserData>({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = values;

  const [nameDisabled, setNameDisabled] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [passwordDisabled, setPasswordDisabled] = useState(true);

  const [dataIsModified, setDataIsModified] = useState(false);

  useEffect(()=>{
    setValues({...user, password: ""});
  }, [user]);

  useEffect(()=>{
    const dataWasModified =
      user.name !== name
      || user.email !== email
      || password !== "";
    setDataIsModified(dataWasModified);

  }, [name, email, password]);


  const onSubmitFormHandler = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const newUserData: TUserData = {
      name: "",
      email: "",
      password: ""
    };

    if (name !== user.name && name !== "") {
      newUserData.name = name;
    }

    if (email !== user.email && email !== "") {
      newUserData.email = email;
    }

    if (password !== "") {
      newUserData.email = email;
    }

    dispatch(updateUserData(newUserData));
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
        onChange={handleChange}
      />
      <Input
        name="email"
        placeholder="E-mail"
        value={email}
        disabled={emailDisabled}
        icon="EditIcon"
        onIconClick={()=>setEmailDisabled(false)}
        onChange={handleChange}
      />
      <Input
        name={'password'}
        placeholder="Пароль"
        value={password}
        disabled={passwordDisabled}
        icon="EditIcon"
        onIconClick={(e: React.MouseEvent<HTMLDivElement>)=>setPasswordDisabled(false)}
        onChange={handleChange}
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