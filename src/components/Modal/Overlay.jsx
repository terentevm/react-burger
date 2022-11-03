import PropTypes from "prop-types";
import styles from "./modal.module.css";
const Overlay = ({ children, onClick }) => {
  return (
    <div
      className={styles.modal__overlay}
      onClickCapture={onClick}
    >
      { children }
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func
}

export { Overlay };