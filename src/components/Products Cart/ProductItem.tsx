import Typography from "@mui/material/Typography";
import React, { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
import { Product } from "src/homeworks/ts1/3_write";
import * as styles from './styles.module.scss'
import ShoppingCartButton from "../ShoppingCartButton";
import Divider from "@mui/material/Divider";
import cn from 'classnames'
import { ICartProduct } from "./ProductsCart";
import { useProduct } from "src/helpers/providers/ProductProvider";

interface IProductItem {
    product: ICartProduct,
    products: ICartProduct[],
    setProduct: Dispatch<SetStateAction<ICartProduct[]>>
}

export const ProductItem: FC<IProductItem> = (props) => {
    const [product, setProduct] = useState<Product | null>(null)
    const [count, setCount] = useState(props.product.quantity)

    const { products } = useProduct()

    useEffect(() => {
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == props.product.id) {
                setProduct(products[i]);
                break;
            }
        }
    }, [])

    useEffect(() => {
        const tempArr = [...props.products]
        tempArr.map((game: ICartProduct, index: number) => {
            if (game.id == props.product.id && game.quantity != count) {
                tempArr[index].quantity = count
                props.setProduct(tempArr)
                return
            }
        })

    }, [count])
    return (
        <>
            {
                product && <>
                    <div key={props.product.id} className={styles.gameContainer}>
                        <div key={props.product.id + '_img'} className={cn('col-1', styles.heightCartItem)}>
                            <img className={styles.gameImgContainer} src={product.photo} alt={product.name} />
                        </div>
                        <div key={props.product.id + '_name'} className='col-5 px-3'>
                            <Typography variant='subtitle1'>{product.name}</Typography>
                        </div>
                        <div key={props.product.id + '_price'} className='col-1 px-3'>
                            <Typography variant='subtitle1'>{product.price} руб.</Typography>
                        </div>
                        <div key={props.product.id + '_quantity'} className='col-3 px-3'>
                            <ShoppingCartButton count={count} setCount={setCount} />
                        </div>
                        <div key={props.product.id + '_finalPrice'} className='col-2 px-3'>
                            <Typography variant='subtitle1'>{product.price * count} руб.</Typography>
                        </div>
                    </div>
                    <Divider key={props.product.id + '_divider'} className={styles.gameDivider} />
                </>
            }
        </>

    )
}