import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as styles from './styles.module.scss';
import { Typography } from '@mui/material';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { getIsAuth, getProfile } from 'src/stores/sagaStore/slices/user';
import { useAccessLevel } from 'src/hooks/useAccessLevel';

export const Navigation: FC = () => {
  const { pathname } = useLocation();
  const isAuth = useSelector(getIsAuth);
  const accessLevel = useAccessLevel();
  const [links, setLinks] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isAuth) {
      if (accessLevel === 777) {
        setLinks({
          '/': 'Главная',
          '/dashboard': 'Панель управления',
          '/orders': 'Заказы',
          '/profile': 'Профиль',
          '/cart': 'Корзина',
        });
      } else {
        setLinks({
          '/': 'Главная',
          '/orders': 'Заказы',
          '/profile': 'Профиль',
          '/cart': 'Корзина',
        });
      }
    } else {
      setLinks({
        '/': 'Главная',
        '/profile': 'Профиль',
        '/cart': 'Корзина',
      });
    }
  }, [isAuth, accessLevel]);

  return (
    <div className={styles.navigationBar}>
      {Object.entries(links).map(([link, val], index) => (
        <Link
          key={index}
          to={link}
          className={cn({
            [styles.navLink]: true,
            [styles.activeLink]: link === pathname,
          })}
        >
          <Typography variant="button">{val}</Typography>
        </Link>
      ))}
    </div>
  );
};
