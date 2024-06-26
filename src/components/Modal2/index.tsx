import React, { FC } from 'react';
import * as styles from './styles.module.scss';
import { LuX } from 'react-icons/lu';
import { createPortal } from 'react-dom';

export interface IModal2 {
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal2: FC<IModal2> = ({ onClose, children }) => {
  const el = document.getElementsByClassName('app-container')[0];
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    el &&
    createPortal(
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.modalContent}>
          <LuX className={styles.buttonClose} onClick={() => onClose()} />
          {children}
        </div>
      </div>,
      el
    )
  );
};
export default Modal2;
