import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as styles from './styles.module.scss'
import { Typography } from '@mui/material'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { getProfile } from 'src/stores/globalStore/profile'

export const Navigation: FC = () => {
    const { pathname } = useLocation()
    const accessLevel = useSelector(getProfile)?.accessLevel
    let links = {}
    if (accessLevel == 777) {
        links = {
            '/': 'Главная',
            '/dashboard': 'Панель управления',
            '/profile': 'Профиль',
            '/cart': 'Корзина',
        }
    }
    else if (accessLevel > -1) {
        links = {
            '/': 'Главная',
            '/profile': 'Профиль',
            '/cart': 'Корзина',
        }
    }
    else {
        links = {
            '/': 'Главная',
            '/cart': 'Корзина',
        }
    }
    return (
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
    )
}