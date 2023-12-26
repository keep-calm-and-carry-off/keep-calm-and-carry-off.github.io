import React from 'react';
import { LuPlus, LuMinus } from "react-icons/lu";
import * as styles from './styles.module.scss'
import ButtonOtus from '../ButtonOtus';
import { LuShoppingCart } from "react-icons/lu";

export interface IShoppingCartButtonProps {
    count: number;
    setCount: (count: number) => void;
    disabled?: boolean;
}

const ShoppingCartButton: React.FC<IShoppingCartButtonProps> = (props: IShoppingCartButtonProps) => {
    if (props.disabled){
        return(
            <ButtonOtus disabled><LuShoppingCart className={styles.cartIcon}/>Недоступно</ButtonOtus>
        )
    }
    else if (props.count == 0) {
        return (
                <ButtonOtus variant='info' onClick={() => props.setCount(1)}><LuShoppingCart className={styles.cartIcon}/>В корзину</ButtonOtus>
        );
    } else {
        return (
            <>
                <ButtonOtus variant='info' className={styles.cartButtonWithIncrement}>
                        <LuMinus className={styles.increment} onClick={() => props.setCount(props.count - 1)}/>
                        <input type="text" className={styles.inputValue} value={props.count} onChange={(e: any) => { props.setCount((e.target.value).replace(/[^\d]/g, '')) }} />
                        <LuPlus className={styles.increment} onClick={() => props.setCount(props.count + 1)} width={16} height={16} /></ButtonOtus>
                {/* <div className={styles.cartContainer}>
                    <LuMinus className={styles.increment} onClick={() => props.setCount(props.count - 1)} width={16} height={16} />
                    <input type="text" className={styles.inputValue} value={props.count} onChange={(e: any) => { props.setCount((e.target.value).replace(/[^\d]/g, '')) }} />
                    <LuPlus className={styles.increment} onClick={() => props.setCount(props.count + 1)} width={16} height={16} />
                </div> */}
            </>

        );
    }
};

export default ShoppingCartButton;
