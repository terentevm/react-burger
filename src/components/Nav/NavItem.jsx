import styles from './nav.module.css';
import PropTypes from 'prop-types';

const NavItem = ({ text, Icon, isActive, onClick }) => {

  return (
    <div
      className={styles.item}
      onClick={onClick}
    >
      { <Icon type={isActive === true ? "primary" : "secondary"}/> }
      <span
        className={(isActive === true ? styles.text_active : styles.text) + " text text_type_main-default ml-2"}
      >
        { text }
      </span>
    </div>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}
export { NavItem };