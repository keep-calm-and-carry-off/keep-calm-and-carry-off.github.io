import React, { FC, HTMLProps, useRef } from 'react';
import * as styles from './styles.module.scss';
import Logo from '../Logo';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import cn from 'classnames';

export type IHeaderProps = HTMLProps<HTMLDivElement>;

const Header: FC<IHeaderProps> = (props) => {
  return (
    <div className={styles.headerContainer} {...props}>
      <Logo />
      {props.children}
    </div>
  );
};

export default Header;
