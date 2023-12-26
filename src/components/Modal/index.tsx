import React, { FC, useEffect, useState } from "react";
import * as styles from './styles.module.scss';
import { LuX } from 'react-icons/lu';

export interface IModal {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: FC<IModal> = ({ visible, onClose, children }) => {
  const [isShow, setIsShow] = useState(visible);

  useEffect(() => {
    setIsShow(visible);
  }, [visible]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    setIsShow(visible);
  }, [visible]);

  return (
    <>
      {isShow && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <LuX className={styles.buttonClose} onClick={() => onClose()} />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
