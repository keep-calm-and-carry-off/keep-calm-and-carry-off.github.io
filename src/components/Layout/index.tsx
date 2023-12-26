import React, { FC, HTMLProps, PropsWithChildren } from "react";
import Header from "../Header";
import cn from 'classnames';
import * as styles from './styles.module.scss'

export interface ILayout extends HTMLProps<HTMLDivElement> {}

const Layout:FC<ILayout> = (props:ILayout) => {
    return <div className={cn(styles.layout, props.className)} {...props}>
        <Header/>
        {props.children}
    </div>
}

export default Layout