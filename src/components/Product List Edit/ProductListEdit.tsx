import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useProduct } from 'src/helpers/providers/ProductProvider'
import { Product } from 'src/homeworks/ts1/3_write'
import * as styles from './styles.module.scss'

export const ProductListEdit: FC = () => {
    const { products } = useProduct()
    if (products.length == 0) return <>Нет товара для редактирования.</>

    const productWithEdit = products.map((game: Product) => {
        const link = `?showModal=true&content=editProduct&productId=${game.id}`
        return (
            <div className={styles.gameContainer + ' col-3'} key={game.id}>
                <div className={styles.gameBody}>
                    <div className={styles.gameTitle}>{game.name}</div>
                    <div className={styles.gamePhoto}><img src={game.photo} alt={game.name} /></div>
                    <div>{game.desc}</div>
                    <div>{game.price} руб.</div>
                    <div>{game.category.name}</div>
                    <Link to={link}>Редактировать</Link>
                </div>
            </div>
        )
    })
    return (
        <div className={styles.productsContainer}>
            {productWithEdit.map((item: ReactNode) => item)}
        </div>
    )
}