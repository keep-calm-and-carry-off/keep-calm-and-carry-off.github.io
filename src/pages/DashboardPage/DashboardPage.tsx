import React, { FC } from 'react'
import { ProductListEdit } from 'src/components/Product List Edit'
import { useProduct } from 'src/helpers/providers/ProductProvider'

export const DashboardPage:FC = () => {
    const { products } = useProduct()

    return <ProductListEdit/>
}