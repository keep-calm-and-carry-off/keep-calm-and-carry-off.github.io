import React, { FC, ReactNode } from 'react';
import * as styles from './styles.module.scss'

export const PageContainer: FC<{ children: ReactNode | ReactNode[] }> = (props) => {
  return <div className={styles.containerContent}>{props.children}</div>;
};
