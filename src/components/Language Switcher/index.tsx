import React, { FC } from "react";
import { GrLanguage } from "react-icons/gr";
import Switcher from "../Switcher";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: FC = () => {
    const { i18n } = useTranslation();
    const language = i18n.language

    const handleSwitchLang = (langSelected: boolean) => {
        let langSel = ''
        if (langSelected) langSel = 'en'
        else langSel = 'ru'
        i18n.changeLanguage(langSel);
    }
    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <GrLanguage style={{ marginRight: '4px' }} />
            <span style={{ marginRight: '4px' }}>рус</span>
            <Switcher value={language === 'ru' ? false : true} onChange={handleSwitchLang} />
            <span style={{ marginLeft: '8px' }}>eng</span>
            <GrLanguage style={{ marginLeft: '8px' }} />
        </div>
    )
}

export default LanguageSwitcher