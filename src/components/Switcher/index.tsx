import React, { useState, useCallback } from 'react'
import * as styles from './styles.module.scss'
import cn from 'classnames'

interface SwitcherProps {
    value: boolean
    onChange: () => void
}

const Switcher: React.FC<SwitcherProps> = (props) => {
    return (
        <div className={cn(styles.switcher, {
            [styles.active]: props.value
        })} onClick={props.onChange}>
            <div className={cn(styles.slider, {
                [styles.sliderActive]: props.value,
                [styles.sliderDeactive]: !props.value
            })} />
        </div>
    )
}

export default Switcher