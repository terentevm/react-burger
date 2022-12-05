import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { forgotPassword } from '../../services/actions/auth';
import { useForm } from "../../hooks/useForm";
import styles from './forgot.module.css';

const ForgotPassword = () => {
  const location = useLocation();
  const history = useHistory();

  const { values, handleChange } = useForm({email: ""});
  const { email } = values;

  const dispatch = useDispatch();

  const { userRequest } = useSelector(state=>({
    userRequest: state.auth.userRequest
  }));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword({email: email}, ()=>{
      history.push('/reset-password',{from:location});
    }))
  }

  return (
    <div className={styles.forgot}>
      <form className={styles.forgot__form} onSubmit={onSubmitHandler}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <Input
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
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
