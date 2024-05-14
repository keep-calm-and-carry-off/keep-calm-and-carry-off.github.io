import Typography from "@mui/material/Typography";
import React, { FC, useState } from "react";
import * as styles from './styles.module.scss'
import ShoppingCartButton from "../ShoppingCartButton";
import Divider from "@mui/material/Divider";
import cn from 'classnames'
import { useProduct } from "src/helpers/providers/ProductProvider";
import { ICartProduct } from "src/types";
import { useSelector } from "react-redux";
import { getProductById, getProducts } from "src/stores/globalStore/product";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "src/stores/globalStore/globalStore";


interface IProductItem {
    product: ICartProduct
}

export const ProductItem: FC<IProductItem> = (props) => {
    const [count, setCount] = useState(props.product.quantity)

    const products = useSelector(getProducts)
    const product = useSelector(getProductById(props.product.id))
    const dispatch = useDispatch()
    const deleteFromCart = () => dispatch(removeFromCart({...product, quantity:0}))


    return (
        <>
            {
                product && <>
                    <div key={props.product.id} className={styles.gameContainer}>
                        <div key={props.product.id + '_img'} className={cn('col-1', styles.heightCartItem)}>
                            <img className={styles.gameImgContainer} src={product.photo} alt={product.name} />
                        </div>
                        <div key={props.product.id + '_name'} className='col-4 px-3'>
                            <Typography variant='subtitle1'>{product.name}</Typography>
                        </div>
                        <div key={props.product.id + '_price'} className='col-1 px-3'>
                            <Typography variant='subtitle1'>{product.price} руб.</Typography>
                        </div>
                        <div key={props.product.id + '_quantity'} className='col-3 px-3'>
                            <ShoppingCartButton productId={product.id} />
                        </div>
                        <div key={props.product.id + '_finalPrice'} className='col-2 px-3'>
                            <Typography variant='subtitle1'>{product.price * count} руб.</Typography>
                        </div>
                        <div key={props.product.id + '_deleteFromCart'} className='col-1 px-3'>
                            <AiFillDelete onClick={deleteFromCart} style={{cursor:'pointer', fontSize:'24px', color:'red'}}/>
                        </div>
                    </div>
                    <Divider key={props.product.id + '_divider'} className={styles.gameDivider} />
                </>
            }
        </>

    )
}