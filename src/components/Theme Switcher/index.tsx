import React, { FC } from "react";
import { WiMoonAltWaxingCrescent5, WiSolarEclipse } from "react-icons/wi";
import Switcher from "../Switcher";

interface IThemeSwitcher{
    themeSelector: (theme:string) => void
}

const ThemeSwitcher: FC<IThemeSwitcher> = (props) => {
    const handleSwitch = (themeSelected: boolean) => {
        let themeSel = ''
        if (themeSelected) themeSel = 'dark'
        else themeSel = 'light'
        props.themeSelector(themeSel)
    }
    return (
        <div style={{display:'flex', flexDirection:'row', boxSizing:'border-box'}}>
            <WiSolarEclipse style={{ marginRight: '8px' }} />
            <Switcher onChange={handleSwitch} />
            <WiMoonAltWaxingCrescent5 style={{ marginLeft: '8px' }} />
        </div>
    )
}

export default ThemeSwitcher