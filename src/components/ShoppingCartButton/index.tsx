import React from 'react';
import { LuPlus, LuMinus } from "react-icons/lu";
import * as styles from './styles.module.scss'

export interface IShoppingCartButtonProps {
    count: number;
    setCount: (count: number) => void
}

const ShoppingCartButton: React.FC<IShoppingCartButtonProps> = (props: IShoppingCartButtonProps) => {
    if (props.count == 0) {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.cartButton} type="button" onClick={() => props.setCount(1)}>В корзину</button>
            </div>
        );
    } else {
        return (
            <div className={styles.cartContainer}>
                <LuMinus className={styles.increment} onClick={() => props.setCount(props.count - 1)} width={16} height={16} />
                <input type="text" className={styles.inputValue} value={props.count} onChange={(e: any) => { props.setCount((e.target.value).replace(/[^\d]/g, '')) }} />
                <LuPlus className={styles.increment} onClick={() => props.setCount(props.count + 1)} width={16} height={16} />
            </div>
        );
    }
};

export default ShoppingCartButton;
