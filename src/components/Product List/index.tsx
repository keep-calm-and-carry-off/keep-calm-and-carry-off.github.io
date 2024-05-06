import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import ShortProductCard, { IShortProductCardProps } from '../ShortCardProduct'
import { createRandomProduct, Product } from '../../homeworks/ts1/3_write'
import ButtonOtus from '../ButtonOtus'
import * as styles from './styles.module.scss'
import { useIntersectionObserver } from 'src/hooks/useIntersectionObserver'
import { useProduct } from 'src/helpers/providers/ProductProvider'

export interface IProductListProps {
    initialProducts: Product[]
}

const ProductList: FC<IProductListProps> = ({ initialProducts }) => {
    const { products } = useProduct()
    const lastProductRef = useRef<HTMLDivElement | null>(null)
    const showcaseRef = useRef<HTMLDivElement | null>(null)

    const handleIntersection = () => {
        console.log('intersaction')
    }

    useIntersectionObserver(lastProductRef, handleIntersection)

    const ShortProdCardMemo = React.memo(ShortProductCard)

    const scrollToBottom = () => {
        const showcase = showcaseRef.current
        const lastProduct = lastProductRef.current
        if (showcase && lastProduct) {
            showcase.scrollTop = lastProduct.offsetTop - showcase.offsetTop
        }
    }

    const handleShowMoreClick = useCallback(() => {
        //handleIntersection()
        scrollToBottom()
    }, [handleIntersection, scrollToBottom])

    return (
        <div className={styles.wrapper}>
            <div ref={showcaseRef} className={styles.showcase} style={{ height: '600px', overflowY: 'auto' }}>
                {products.map((product: Product, index: number) => (
                    <div
                        key={product.id}
                        ref={index === products.length - 1 ? lastProductRef : null}
                        className={`product-list-item ${index === products.length - 1 ? 'last-item' : ''}`}
                    >
                        <ShortProdCardMemo description={'Большое и красочное описание товара, тут много текста'} image={product.photo} {...product} />
                    </div>
                ))}
            </div>
            <ButtonOtus style={{ marginTop: '8px', width: '200px' }} onClick={handleShowMoreClick}>
                Показать еще
            </ButtonOtus>
        </div>
    )
}

export default ProductList