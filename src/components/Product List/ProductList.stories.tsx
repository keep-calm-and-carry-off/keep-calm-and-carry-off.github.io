import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProductList, { IProductListProps } from './index';
import { Product, createRandomProduct } from 'src/homeworks/ts1/3_write';

export default {
    title: 'Список товаров',
    component: ProductList,
    parameters: {
        docs: {
            description: {
                component: 'Компонент списка товаров',
            },
        },
    },
    tags: ['autodocs']
} as Meta;

const arrProducts = () => {
    const arrProducts: Product[] = []
    for (let i = 0; i < 5; i++) {
        arrProducts.push(createRandomProduct(new Date().toISOString()))
    }
    return arrProducts
}

export const Default: StoryObj<IProductListProps> = (args: IProductListProps) => <ProductList {...args} />
Default.args = {
    initialProducts: arrProducts()
} as IProductListProps;  