import React, { FC } from "react";
import * as styles from './styles.module.scss';
import { LuX } from 'react-icons/lu';
import { createPortal } from "react-dom";

export interface IModal2 {
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal2: FC<IModal2> = ({ onClose, children }) => {

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <LuX className={styles.buttonClose} onClick={() => onClose()} />
        {children}
      </div>
    </div>, document.body)
  )
}
export default Modal2;
