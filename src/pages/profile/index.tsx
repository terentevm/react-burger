import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import { UserInfo } from "../userInfo";
import { NotFoundPage } from '../NotFoundPage';
import styles from './profile.module.css';
import { IIdParams } from '../../types';
const ProfilePage = () => {

  const { url } = useRouteMatch<IIdParams>();
  const isProfile = !!useRouteMatch({ path: '/profile', exact: true});
  const isOrders = !!useRouteMatch({ path: '/profile/orders', exact: true});
  const isLogout = !!useRouteMatch({ path: '/profile/exit', exact: true});

  return(
    <div className={styles.profile}>
      <nav className={styles.profile__nav}>
        <NavLink
          to={`${url}`}
          className={`${styles.profile__link} text text_type_main-medium`}
          activeClassName={styles.profile__link_active}
          isActive={()=>(isProfile)}

        >
          Профиль
        </NavLink>
        <NavLink
          to={`${url}/orders`}
          className={`${styles.profile__link} text text_type_main-medium`}
          isActive={()=>isOrders}
          activeClassName={styles.profile__link_active}
        >
          История заказов
        </NavLink>
        <NavLink
          to={`${url}/exit`}
          className={`${styles.profile__link} text text_type_main-medium`}
          isActive={()=>isLogout}
          activeClassName={styles.profile__link_active}
        >
          Выход
        </NavLink>

      </nav>
      <section className={styles.profile__view}>
          <Switch>
            <Route path={`${url}`} exact>
              <UserInfo />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </section>
    </div>
  )
}

export { ProfilePage };