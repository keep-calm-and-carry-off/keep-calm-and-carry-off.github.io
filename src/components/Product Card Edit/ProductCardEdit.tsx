import React, { Dispatch, FC, SetStateAction, useEffect, useLayoutEffect, useState } from 'react'
import { useProduct } from 'src/helpers/providers/ProductProvider'
import { Product } from 'src/homeworks/ts1/3_write'
import { useForm } from 'react-hook-form';
import * as styles from './styles.module.scss'
import { Typography } from '@mui/material';

interface IProductCardEdit {
    productId: string
}

type FormData = Omit<Product, 'id' | 'createdAt'>


export const ProductCardEdit: FC<IProductCardEdit> = (props) => {
    const { products, setProducts } = useProduct()
    const [product, setProduct] = useState<Product | null>(null)


    useEffect(() => {
        let tempItem: Product | null = null
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == props.productId) {
                tempItem = products[i]
                break;
            }
        }
        setProduct(tempItem)
    }, [])



    const form = useForm<FormData>()

    useEffect(() => {
        if (product) form.reset(product);
    }, [product])

    const handleFormSubmit = (data: FormData) => {
        setProduct(prevProduct => {
            if (!prevProduct) return null;
            const updatedProduct = { ...prevProduct, ...data };
            const updatedProducts = products.map((p: Product) =>
                p.id === prevProduct.id ? updatedProduct : p
            );
            setProducts(updatedProducts);
            return updatedProduct;
        });
    };

    const clearForm = () => {
        form.reset();
    };
    return (
        <>
            <Typography variant='h6'>Редактирование товара</Typography>
            {product ?

                <form className={styles.formContainer} onSubmit={form.handleSubmit(handleFormSubmit)}>
                    <label className={styles.formRow}>
                        Название:
                        <input type="text" {...form.register('name', { required: true })} />
                    </label>
                    <label className={styles.formRow}>
                        Фото:
                        <input type="text" {...form.register('photo', { required: true })} />
                    </label>
                    <label className={styles.formRow}>
                        Описание:
                        <textarea {...form.register('desc')} />
                    </label>
                    <label className={styles.formRow}>
                        Старая цена:
                        <input type="number" {...form.register('oldPrice')} />
                    </label>
                    <label className={styles.formRow}>
                        Цена:
                        <input type="number" {...form.register('price', { required: true })} />
                    </label>
                    <label className={styles.formRow}>
                        Категория:
                        <select {...form.register('category', { required: true })}>
                            <option value="category1">Категория 1</option>
                            <option value="category2">Категория 2</option>
                        </select>
                    </label>
                    <button type="submit">Сохранить</button>
                    <button type="button" onClick={clearForm}>Очистить форму</button>
                </form> : <div>Неизвестный товар</div>
            }
        </>
    );
}
