import React, { FC, useEffect, useState } from 'react';
import * as styles from './styles.module.scss';
import LanguageSwitcher from '../Language Switcher';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from '../Theme Switcher';
import { CgMoreO } from 'react-icons/cg';
import Modal2 from '../Modal2';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';

import { getIsAuth, getProfile, logout } from 'src/stores/sagaStore/slices/user';

export const Contacts: FC = () => {
  const [isShow, setIsShow] = useState(false);
  const { t } = useTranslation();
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const profile = useSelector(getProfile);

  const logoutShop = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.contacts}>
      <div className={styles.wrapper}>
        <span>
          <span className={styles.secondaryInfo}>{t(`weekDays.short.Mo`) + '-' + t(`weekDays.short.Fr`)}</span>
          <span className={styles.primaryInfo}>10:00-19:00</span>
        </span>
        <span>
          <span className={styles.secondaryInfo}>{t(`another.waitYou`)}</span>
          <span className={styles.primaryInfo}>{t(`another.address`)}</span>
        </span>
        <span>
          <span className={styles.secondaryInfo}>{t(`another.call`)}</span>
          <span className={styles.primaryInfo}>8 (495) 625-28-19</span>
        </span>

        <div className={styles.themeSwitch}>
          {!isAuth ? (
            <>
              <Link to="?showModal=true&content=auth" className="d-flex text-decoration-none">
                <div className={styles.login}>Войти</div>
                <AiOutlineUser className={styles.settings} style={{ marginRight: '8px' }} />
              </Link>
            </>
          ) : (
            <>
              <div className={styles.login}>{profile?.email}</div>
              <AiOutlineLogout className={styles.settings} style={{ marginRight: '8px' }} onClick={logoutShop} />
            </>
          )}
          <CgMoreO className={styles.settings} onClick={() => setIsShow(true)} />
        </div>
        {isShow && (
          <Modal2 onClose={() => setIsShow(false)}>
            <div className={styles.modalSettings}>
              <p>Язык</p>
              <LanguageSwitcher />
              <p>Тема</p>
              <ThemeSwitcher />
            </div>
          </Modal2>
        )}
      </div>
    </div>
  );
};
