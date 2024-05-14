import React, { FC, useState } from 'react';
import * as styles from './styles.module.scss';
import { LuImageOff } from "react-icons/lu";
import ShoppingCartButton from '../ShoppingCartButton';
import { useSelector } from 'react-redux';
import { getProductById } from 'src/stores/globalStore/product';

export interface IShortProductCardProps {
    productId:string
}

const ShortProductCard: FC<IShortProductCardProps> = (props: IShortProductCardProps) => {
    const product = useSelector(getProductById(props.productId));
    if (!product) return <>Нет продукта</>
    return (
        <div className={styles.shortProductCard}>
            <div className={styles.imageContainer}>
                {product.photo ?
                    <img src={product.photo} alt={product.name} className={styles.image} /> :
                    <LuImageOff className={styles.noImage} />
                }
            </div>
            <p className={styles.name}>{product.name}</p>
            <div className={styles.infoContainer}>

                <div className={styles.description}>{product.desc}</div>
                <div className={styles.price}>{product.price} руб.</div>
                <div className={styles.buttonContainer}><ShoppingCartButton productId={product.id} /></div>
            </div>
        </div>
    );
};

export default ShortProductCard;