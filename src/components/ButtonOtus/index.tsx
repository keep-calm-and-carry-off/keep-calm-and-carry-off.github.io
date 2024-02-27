import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import * as styles from './styles.module.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'info' | 'disabled';
    fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({ children, variant = 'primary', fullWidth, className, disabled, ...anyProps }) => {
    const buttonClass = cn(styles.button, {
        [styles.primary] : variant == 'primary',
        [styles.secondary] : variant == 'secondary',
        [styles.info] :  variant == 'info',
        [styles.disabled]:disabled,
        [styles.fullWidth] : fullWidth
    }, className);

    return (
        <button className={buttonClass} {...anyProps}>
            {children}
        </button>
    );
};

export default Button;
