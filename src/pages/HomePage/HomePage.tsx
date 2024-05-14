import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import ProductList from 'src/components/Product List'
import { getProducts } from 'src/stores/globalStore/product'

export const HomePage:FC = () => {
    const products = useSelector(getProducts)
    return <ProductList initialProducts={products}/> 
}