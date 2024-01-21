import React, { FC, useEffect, useState } from "react";
import { WiMoonAltWaxingCrescent5, WiSolarEclipse } from "react-icons/wi";
import Switcher from "../Switcher";
import { useThemeContext } from "src/hooks/useThemeContext";

const ThemeSwitcher: FC = () => {
    const {theme, setTheme} = useThemeContext()
    const [value, setValue] = useState(theme === 'light' ? false : true)
    
    useEffect(()=> {
        setTheme(value ? 'dark' : 'light')
    }, [value])

    const handleSelect = () => {
        setValue(!value)
    }
    return (
        <div style={{display:'flex', flexDirection:'row', boxSizing:'border-box'}}>
            <WiSolarEclipse style={{ marginRight: '8px' }} />
            <Switcher value={value} onChange={handleSelect} />
            <WiMoonAltWaxingCrescent5 style={{ marginLeft: '8px' }} />
        </div>
    )
}

export default ThemeSwitcher