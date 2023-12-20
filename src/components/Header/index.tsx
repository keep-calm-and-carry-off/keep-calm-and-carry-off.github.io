import React, { FC, HTMLProps } from 'react'
import * as styles from './styles.module.scss'
import Logo from '../Logo'

export interface IHeaderProps extends HTMLProps<HTMLDivElement> {}

const Header: FC<IHeaderProps> = (props:IHeaderProps) => {
    return (
        <>
            <div className={styles.headerContainer} {...props}>
                <div className={styles.headerLogo}>
                    <Logo height={'100%'} width={'100%'} />
                </div>
                {props.children}
            </div>
        </>
    )
}

export default Header