import React, { FC, HTMLProps, useRef } from 'react'
import * as styles from './styles.module.scss'
import Logo from '../Logo'
import { Link, useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'
import cn from 'classnames'

export interface IHeaderProps extends HTMLProps<HTMLDivElement> { }

const Header: FC<IHeaderProps> = (props) => {
    const { pathname } = useLocation()
    const links = {
        '/': 'Главная',
        '/auth': 'Авторизация',
        '/dashboard': 'Панель управления',
        '/profile': 'Профиль',
        '/cart': 'Корзина',
    }
    return (
        <div className={styles.headerContainer} {...props}>
            <Logo />
            <div className={styles.navigationBar}>
                {
                    Object.entries(links).map(([link, val]: [string, string], index: number) => {
                        return (
                            <Link
                                key={index}
                                to={link}
                                className={cn(
                                    {
                                        [styles.navLink]: true,
                                        [styles.activeLink]: link == pathname
                                    }
                                )}>
                                <Typography variant='button'>{val}</Typography>
                            </Link>
                        )
                    })
                }
            </div>
            {props.children}
        </div>
    )
}

export default Header