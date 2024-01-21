import React, { FC, useState } from 'react'
import * as styles from './styles.module.scss'
import LanguageSwitcher from '../Language Switcher';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from '../Theme Switcher';
import { CiSettings } from "react-icons/ci";
import Modal2 from '../Modal2';
import { useThemeContext } from 'src/hooks/useThemeContext';


const Contacts: FC = () => {
    const {theme, setTheme} = useThemeContext()
    const [isShow, setIsShow] = useState(false)
    const { t } = useTranslation()

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
                    <CiSettings className={styles.settings} onClick={() => setIsShow(true)} />
                </div>
                {isShow && 
                <Modal2 onClose={() => setIsShow(false)}>
                    <div className={styles.modalSettings}>
                    <p>Язык</p>
                    <LanguageSwitcher />
                    <p>Тема</p>
                    <ThemeSwitcher />
                    </div>
                </Modal2>}
            </div>
        </div>
    )
}

export default Contacts