import React, { SyntheticEvent, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import { Overlay } from "./Overlay";
import styles from './modal.module.css';
import { TModalProps } from './types';

const modalRoot = document.getElementById( 'modal' ) as HTMLElement;

interface IKeyboardEvent extends Event {
  key: string
}
const Modal = ({ visible, onClose, children }: TModalProps) => {

  const btnCloseOnClickHandler = useCallback((e: SyntheticEvent) => {
    e.stopPropagation();
    onClose();
  }, []);

  const overlayOnClickHandler = useCallback((e: SyntheticEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, []);


  useEffect(()=>{
    const onKeyDownHandler : (e: IKeyboardEvent) => any = (e: IKeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', onKeyDownHandler);
    return function () {
      document.removeEventListener('keydown', onKeyDownHandler);
    }
  }, [])

  return createPortal(
    <>
      {
        visible &&
        <Overlay
          onClick={overlayOnClickHandler}
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
        </Overlay>
      }
    </>,modalRoot)
}

export { Modal };
