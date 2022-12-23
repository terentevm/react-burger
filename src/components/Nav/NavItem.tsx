import styles from './nav.module.css';
import { TNavItemProps } from './types';

const NavItem = ({ text, Icon, isActive, onClick } : TNavItemProps) => {

  return (
    <div
      className={styles.item}
      onClick={onClick}
    >
      { <Icon type={isActive === true ? 'primary' : 'secondary'}/> }
      <span
        className={(isActive === true ? styles.text_active : styles.text) + " text text_type_main-default ml-2"}
      >
        { text }
      </span>
    </div>
  );
};

export { NavItem };
