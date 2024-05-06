import React, { FC, useState } from 'react'
import { ProductsCart } from 'src/components/Products Cart'
import { CART_INIT_PRODUCTS } from 'src/helpers/constants/initCartSimulate'

export const CartPage:FC = () => {
    const [products, setProducts] = useState(CART_INIT_PRODUCTS)
    return <ProductsCart products={products} setProducts={setProducts}/>
}