import styles from "./modal.module.css";
import { TOverlayProps } from './types';
const Overlay = ({ children, onClick }: TOverlayProps) => {
  return (
    <div
      className={styles.modal__overlay}
      onClickCapture={onClick}
    >
      { children }
    </div>
  )
}

export { Overlay };