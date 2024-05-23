import React, { ChangeEvent } from 'react';
import { LuPlus, LuMinus } from "react-icons/lu";
import * as styles from './styles.module.scss'
import ButtonOtus from '../ButtonOtus';
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { getProductCartById } from 'src/stores/globalStore/cart';
import { useDispatch } from 'react-redux';
import { addToCart } from 'src/stores/globalStore/globalStore';
import { useProducts } from 'src/hooks/useProducts';

export interface IShoppingCartButtonProps {
    disabled?: boolean;
    productId: string;
}

const ShoppingCartButton: React.FC<IShoppingCartButtonProps> = (props: IShoppingCartButtonProps) => {
    const product = useProducts(props.productId)
    const productCart = product.productCart
    const dispatch = useDispatch()
    const quantityUp = () => {
        if (!productCart) dispatch(addToCart({ ...product.product, quantity: 1 }))
        else dispatch(addToCart({ ...productCart, quantity: productCart.quantity + 1 }))
    }
    const quantityDown = () => {
        if (!productCart || productCart.quantity == 0) dispatch(addToCart({ ...product.product, quantity: 1 }))
        else dispatch(addToCart({ ...productCart, quantity: productCart.quantity - 1 }))

    }
    if (props.disabled) {
        return (
            <ButtonOtus disabled><LuShoppingCart className={styles.cartIcon} />Недоступно</ButtonOtus>
        )
    }
    else if (!productCart || productCart.quantity == 0) {
        return (
            <ButtonOtus variant='info' onClick={quantityUp}><LuShoppingCart className={styles.cartIcon} />В корзину</ButtonOtus>
        );
    } else {
        return (
            <>
                <ButtonOtus variant='info' className={styles.cartButtonWithIncrement}>
                    <LuMinus className={styles.increment} onClick={quantityDown} />
                    <input type="text" name='quantity' className={styles.inputValue} value={productCart?.quantity} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const newQuantity = Number((e.target.value).replace(/[^\d]/g, ''))
                        dispatch(addToCart({ ...productCart, quantity: newQuantity }))
                    }} />
                    <LuPlus className={styles.increment} onClick={quantityUp} width={16} height={16} /></ButtonOtus>
            </>

        );
    }
};

export default ShoppingCartButton;
