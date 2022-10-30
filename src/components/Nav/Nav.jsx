import styles from './nav.module.css';
const Nav = ({ children }) => {
  return (
    <nav className={`${styles.nav} `}>
      { children }
    </nav>
  );
};

export default Nav;