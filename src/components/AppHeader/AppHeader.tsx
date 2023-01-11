import { useEffect } from "react";
import {Link, NavLink, useRouteMatch} from 'react-router-dom';
import Container from "../Container";
import { Nav, NavItem } from "../Nav";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { TMenuType } from './types';
import styles from './app-header.module.css';
import {useState} from "react";

const AppHeader = () => {

  const isConstructor : boolean = !!useRouteMatch({ path: '/', exact: true});
  const isFeed : boolean = !!useRouteMatch('/feed');
  const isProfile : boolean = !!useRouteMatch('/profile');

  const [menuItems, setMenuItems] = useState<TMenuType>([]);

  useEffect(()=>{
    setMenuItems([
      {
        text: "Конструктор",
        icon: BurgerIcon,
        isActive: isConstructor,
        path: "/"
      },
      {
        text: "Лента заказов",
        icon: ListIcon,
        isActive: isFeed,
        path: "/feed"
      },
    ])
  }, [isConstructor, isFeed])

  return (
    <header className={styles.header}>
      <Container>
        <Nav>
          <menu className={styles.menu}>
            { menuItems.map(
              (item, key) =>
                (
                  <NavLink
                    key={key}
                    to={item.path}
                    className={styles.header__link}
                  >
                    <NavItem
                      text={item.text}
                      isActive={item.isActive}
                      Icon={item.icon}
                    />
                  </NavLink>)
            )
            }
          </menu>
          <div className={styles.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <NavLink
            to="/profile"
            className={styles.header__link}
          >
            <NavItem
              text="Личный кабинет"
              Icon={ ProfileIcon }
              isActive={isProfile}
            />
          </NavLink>
        </Nav>
      </Container>
    </header>
  );
}

export default AppHeader;
