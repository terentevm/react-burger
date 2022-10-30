import Container from "../Container";
import { Nav, NavItem } from "../Nav";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css';
import {useState} from "react";

const AppHeader = () => {

  const [menuItems, setMenuItems] = useState([
    {
      text: "Конструктор",
      icon: BurgerIcon,
      isActive: true
    },
    {
      text: "Лента заказов",
      icon: ListIcon,
      isActive: false
    },
  ]);

  const changeMenuItemActivity = (activeItem) => {

    const newState = menuItems.map(item => {
      item.isActive = item.text === activeItem.text;
      return item;
    });

    setMenuItems(newState);
  }

  return (
    <header className={styles.header}>
      <Container>
        <Nav>
          <menu className={styles.menu}>
            { menuItems.map(
              (item, key) =>
                <NavItem
                  key={key}
                  text={item.text}
                  isActive={item.isActive}
                  Icon={item.icon}
                  onClick={()=>changeMenuItemActivity(item)}
                />)
            }
          </menu>
          <div className={styles.logo}>
            <Logo />
          </div>
          <NavItem
            text="Личный кабинет"
            Icon={ ProfileIcon }
            isActive={false}
          />
        </Nav>
      </Container>
    </header>
  );
}

export default AppHeader;