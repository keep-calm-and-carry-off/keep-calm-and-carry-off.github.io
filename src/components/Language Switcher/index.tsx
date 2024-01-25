import React, { FC, useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import Switcher from "../Switcher";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: FC = () => {
    const { i18n } = useTranslation()
    const lang = i18n.language
    const [value, setValue] = useState(lang === 'ru' ? false : true)

    useEffect(() => {
        value ? i18n.changeLanguage('en') : i18n.changeLanguage('ru')
    }, [value])

    const handleSwitchLang = () => {
        setValue(!value)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <GrLanguage style={{ marginRight: '4px' }} />
            <span style={{ marginRight: '4px' }}>рус</span>
            <Switcher value={value} onChange={handleSwitchLang} />
            <span style={{ marginLeft: '8px' }}>eng</span>
            <GrLanguage style={{ marginLeft: '8px' }} />
        </div>
    )
}

export default LanguageSwitcher