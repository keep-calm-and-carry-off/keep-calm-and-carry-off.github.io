import React, { FC } from "react";
import { GrLanguage } from "react-icons/gr";
import Switcher from "../Switcher";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Locale } from "src/helpers/localization/i18next_settings";

const LanguageSwitcher: FC = (props) => {
    const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;

    const handleSwitchLang = (langSelected: boolean) => {
        let langSel = ''
        if (langSelected) langSel = 'en'
        else langSel = 'ru'
        i18n.changeLanguage(langSel);
    }
    return (
        <>
            <GrLanguage style={{ marginRight: '4px' }} />
            <span style={{ marginRight: '4px' }}>рус</span>
            <Switcher onChange={handleSwitchLang} />
            <span style={{ marginLeft: '8px' }}>eng</span>
            <GrLanguage style={{ marginLeft: '8px' }} />
        </>
    )
}

export default LanguageSwitcher