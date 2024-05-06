import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Product } from 'src/homeworks/ts1/3_write'
import * as styles from './styles.module.scss'
import { Divider, Typography } from '@mui/material'
import { ProductItem } from './ProductItem'
import { useProduct } from 'src/helpers/providers/ProductProvider'

export interface ICartProduct extends Pick<Product, 'id'> {
    quantity: number
}

export interface IProductsCart {
    products: ICartProduct[]
    setProducts: Dispatch<SetStateAction<ICartProduct[]>>
}

export const ProductsCart: FC<IProductsCart> = ({ products, setProducts }) => {
    const [total, setTotal] = useState(0)
    const productsOriginal = useProduct().products
    if (products.length == 0)
        return (
            <>Нет товара</>
        )
    useEffect(() => {
        let totalTemp = 0;
        products.map((game: ICartProduct) => {
            for (let i = 0; i < productsOriginal.length; i++) {
                
                if (productsOriginal[i].id == game.id){
                    totalTemp += productsOriginal[i].price * game.quantity
                    break;
                }
            }
        })
        setTotal(totalTemp)
    }, [products])

    const Products = () => products.map((game: ICartProduct) => <ProductItem key={game.id} product={game} products={products} setProduct={setProducts} />)

    return (
        <div className='d-flex flex-column p-5 m-0 border'>
            <Products />
            <div className={styles.cartTotal}>
                <Typography variant='subtitle1' style={{ fontWeight: '700', fontSize: '24px' }}>Итого: {total} руб.</Typography>
            </div>
        </div>
    )
}