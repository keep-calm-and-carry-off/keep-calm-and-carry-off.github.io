import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import ShortProductCard from '../ShortCardProduct'
import { createRandomProduct, Product } from '../../homeworks/ts1/3_write'
import ButtonOtus from '../ButtonOtus'
import * as styles from './styles.module.scss'
import { useIntersectionObserver } from 'src/hooks/useIntersectionObserver'
import { IProduct } from 'src/api/types'
import { useSelector } from 'react-redux'
import { getGamesByCatId } from 'src/stores/sagaStore/slices/products'

export interface IProductListProps {
    categoryId:string
}

const ProductList: FC<IProductListProps> = ({ categoryId }) => {
    const lastProductRef = useRef<HTMLDivElement | null>(null)
    const showcaseRef = useRef<HTMLDivElement | null>(null)
    const products = useSelector(getGamesByCatId(categoryId))

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
        handleIntersection()
        scrollToBottom()
    }, [handleIntersection, scrollToBottom])

    return (
        <div className={styles.wrapper}>
            <div ref={showcaseRef} className={styles.showcase} style={{ height: '600px', overflowY: 'auto' }}>
                {products.map((product: IProduct, index: number) => (
                    <div
                        key={product.id}
                        ref={index === products.length - 1 ? lastProductRef : null}
                        className={`product-list-item ${index === products.length - 1 ? 'last-item' : ''}`}
                    >
                        <ShortProdCardMemo productId={product.id} />
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