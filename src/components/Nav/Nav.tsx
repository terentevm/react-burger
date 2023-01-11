import { PropsWithChildren } from 'react';
import styles from './nav.module.css';
type Props = PropsWithChildren<{}>
const Nav = ({ children } : Props) => {
  return (
    <nav className={`${styles.nav} `}>
      { children }
    </nav>
  );
};

export default Nav;
