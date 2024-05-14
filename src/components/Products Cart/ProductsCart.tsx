import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Product } from 'src/homeworks/ts1/3_write'
import * as styles from './styles.module.scss'
import { Divider, Typography } from '@mui/material'
import { ProductItem } from './ProductItem'
import { useProduct } from 'src/helpers/providers/ProductProvider'
import { useSelector } from 'react-redux'
import { getAllProductsInCart, getTotalPrice } from 'src/stores/globalStore/cart'
import { getProducts } from 'src/stores/globalStore/product'
import { ICartProduct } from 'src/types'
import { useProducts } from 'src/hooks/useProducts'

export interface IProductsCart {
}

export const ProductsCart: FC = () => {
    const products = useProducts()
    const allProductsInCart = products.allProductsInCart
    const total = useSelector(getTotalPrice)
    if (allProductsInCart.length == 0)
        return (
            <>Нет товара</>
        )

    const Products = () => allProductsInCart.map((game: ICartProduct) => <ProductItem product={game} key={game.id} />)

    return (
        <div className='d-flex flex-column p-5 m-0 border'>
            <Products />
            <div className={styles.cartTotal}>
                <Typography variant='subtitle1' style={{ fontWeight: '700', fontSize: '24px' }}>Итого: {total} руб.</Typography>
            </div>
        </div>
    )
}