import React, { FC, useState } from "react";
import { WiMoonAltWaxingCrescent5, WiSolarEclipse } from "react-icons/wi";
import Switcher from "../Switcher";
import { useThemeContext } from "src/hooks/useThemeContext";

interface IThemeSwitcher{
    themeSelector: (theme:string) => void
}

const ThemeSwitcher: FC<IThemeSwitcher> = (props) => {
    const theme = useThemeContext()
    const handleSwitch = (themeSelected: boolean) => {
        let themeSel = ''
        if (themeSelected) themeSel = 'dark'
        else themeSel = 'light'
        props.themeSelector(themeSel)
    }
    return (
        <div style={{display:'flex', flexDirection:'row', boxSizing:'border-box'}}>
            <WiSolarEclipse style={{ marginRight: '8px' }} />
            <Switcher value={theme === 'light' ? false : true} onChange={handleSwitch} />
            <WiMoonAltWaxingCrescent5 style={{ marginLeft: '8px' }} />
        </div>
    )
}

export default ThemeSwitcher