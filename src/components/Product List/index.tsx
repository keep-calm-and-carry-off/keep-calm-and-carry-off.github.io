import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import ShortProductCard, { IShortProductCardProps } from '../ShortCardProduct'
import { createRandomProduct, Product } from '../../homeworks/ts1/3_write'
import ButtonOtus from '../ButtonOtus'
import * as styles from './styles.module.scss'

export interface IProductListProps {
    initialProducts: Product[]
}

const ProductList: FC<IProductListProps> = ({ initialProducts }) => {
    const [products, setProducts] = useState<Product[]>(initialProducts)
    const lastProductRef = useRef<HTMLDivElement | null>(null)
    const showcaseRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        handleIntersection()
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 1.0 }
        )

        const lastProduct: HTMLDivElement = lastProductRef.current
        if (lastProduct) {
            observer.observe(lastProduct)
        }

        return () => {
            if (lastProduct) {
                observer.unobserve(lastProduct)
            }
        }
    }, [products])

    const handleIntersection = () => {
        const newProduct: Product = createRandomProduct(new Date().toISOString())
        setProducts((prevProducts) => [...prevProducts, newProduct])
    }



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
                {products.map((product: Product, index: number) => (
                    <div
                        key={product.id}
                        ref={index === products.length - 1 ? lastProductRef : null}
                        className={`product-list-item ${index === products.length - 1 ? 'last-item' : ''}`}
                    >
                        <ShortProductCard description={'Большое и красочное описание товара, тут много текста'} {...product} />
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
