import React, { FC } from 'react'
import ProductList from 'src/components/Product List'
import { useProduct } from 'src/helpers/providers/ProductProvider'

export const HomePage:FC = () => {
    const { products } = useProduct()
    return <ProductList initialProducts={products}/> 
}