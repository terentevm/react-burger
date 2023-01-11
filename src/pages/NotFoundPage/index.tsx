import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './notfound.module.css'
const NotFoundPage = () => {

  const history = useHistory();

  const btnOnClick = useCallback(()=>{
    history.goBack();
  }, [])

  return (
    <div className={styles.nf__wrapper}>
      <div className={styles.nf__content}>
        <p className="text text_type_digits-large">404</p>
        <Button
          htmlType="button"
          size="medium"
          onClick={btnOnClick}
        >
          Назад
        </Button>
      </div>

    </div>
  )
}

export { NotFoundPage }