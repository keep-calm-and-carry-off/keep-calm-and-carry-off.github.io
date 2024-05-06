import React, { FC, ReactNode, createContext, useContext, useState } from 'react'
import { INIT_PRODUCTS } from '../constants/products'
import { Product } from 'src/homeworks/ts1/3_write'

const ProductContext = createContext(null)

type ProductProviderType = {
    children:ReactNode | ReactNode[] | null
}

export const ProductProvider:FC<ProductProviderType> = (props) => {
    const [products, setProducts] = useState<Product[] | null>(INIT_PRODUCTS)
    
    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    const context = useContext(ProductContext)
    return context
}