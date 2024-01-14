import React, { FC } from 'react'
import * as styles from './styles.module.scss'
import Switcher from '../Switcher'
import { WiSolarEclipse, WiMoonAltWaxingCrescent5 } from "react-icons/wi";
import LanguageSwitcher from '../Language Switcher';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from '../Theme Switcher';


interface IContacts {
    themeSelector: (theme: string) => void
}

const Contacts: FC<IContacts> = (props: IContacts) => {
    const { t } = useTranslation()
    
    return (
        <div className={styles.contacts}>
            <div className={styles.wrapper}>
                <div className={styles.themeSwitch}>
                    <LanguageSwitcher />
                </div>
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
                    <ThemeSwitcher themeSelector={props.themeSelector}/>
                </div>
            </div>
        </div>
    )
}

export default Contacts