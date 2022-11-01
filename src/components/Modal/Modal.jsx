import React, {useEffect} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.css';

const modalRoot = document.getElementById( 'modal' );

const Modal = ({ visible, onClose, children}) => {
  const onKeyDownHandler = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  const btnCloseOnClickHandler = (e) => {
    e.stopPropagation();
    onClose();
  }

  const overlayOnClickHandler = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }


  useEffect(()=>{
    document.addEventListener('keydown', onKeyDownHandler);
    return function () {
      document.removeEventListener('keydown', onKeyDownHandler);
    }
  }, [])

  return createPortal(
    <>
      {
        visible &&
        <div
          className={styles.modal__overlay}
          onClickCapture={overlayOnClickHandler}
        >
          <div className={`${styles.modal__card}`}>
            <div
              className={styles.modal__close_btn}
              onClick={btnCloseOnClickHandler}
            >
              <CloseIcon type="primary"/>
            </div>
            { children }
          </div>
        </div>
      }
    </>,modalRoot)
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
}
export { Modal };
