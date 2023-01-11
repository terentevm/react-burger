import { FC, ReactElement, FormEvent } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { resetPassword } from '../../services/actions/auth';
import styles from './reset.module.css';
import { useForm } from "../../hooks/useForm";
import { LocationState} from "../../types";
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

const ResetPassword : FC = () : ReactElement  => {
  const location = useLocation<LocationState>();
  const history = useHistory();

  const prevUrl: string | undefined = location.state?.from?.pathname || undefined;

  if (prevUrl === undefined) {
    history.push('/login');
  }

  const { values, handleChange } = useForm<{ code: string, password: string}>({code: "", password: ""});
  const { code, password } = values;

  const dispatch = useThunkDispatch();
  const { userRequest } = useAppSelector((state)=>({
    userRequest: state.auth.userRequest
  }));

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(resetPassword({password: password, token: code}, ()=>{
      history.push('/login');
    }))

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
          onChange={handleChange}
        />
        <Input
          name="code"
          placeholder="Введите код из письма"
          value={code}
          onChange={handleChange}
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

export { ResetPassword };
