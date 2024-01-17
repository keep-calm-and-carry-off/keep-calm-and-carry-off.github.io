import React, { useState, useCallback } from 'react'
import * as styles from './styles.module.scss'
import cn from 'classnames'

interface SwitcherProps {
    value: boolean
    onChange: (state: boolean) => void
}

const Switcher: React.FC<SwitcherProps> = (props) => {
    const [activeOption, setActiveOption] = useState(props.value)

    const handleSwitch = useCallback(() => {
        const option = !activeOption
        setActiveOption(option)
        props.onChange(option)
    }, [activeOption, props.onChange])

    return (
        <div className={cn(styles.switcher, {
            [styles.active]: activeOption
        })} onClick={handleSwitch}>
            <div className={cn(styles.slider, {
                [styles.sliderActive]: activeOption,
                [styles.sliderDeactive]: !activeOption
            })} />
        </div>
    )
}

export default Switcher