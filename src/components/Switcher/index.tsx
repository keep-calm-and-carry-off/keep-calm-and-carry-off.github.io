import React, { useState, useCallback } from 'react';
import * as styles from './styles.module.scss';
import cn from 'classnames';

interface SwitcherProps {
    onChange: (state: boolean) => void;
}

const Switcher: React.FC<SwitcherProps> = ({onChange }) => {
    const [activeOption, setActiveOption] = useState(false);

    const handleSwitch = useCallback(() => {
        const option = !activeOption
        setActiveOption(option);
        onChange(option);
    }, [activeOption, onChange]);

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

export default Switcher;