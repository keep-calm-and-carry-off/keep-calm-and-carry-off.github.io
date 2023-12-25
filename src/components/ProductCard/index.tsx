import React, { FC, useState } from 'react';
import * as styles from './styles.module.scss';
import { LuImageOff } from "react-icons/lu";
import ShoppingCartButton from '../ShoppingCartButton';
import { trunscateString } from '../utils';

export interface IProductCardProps {
    price: number;
    image?: string;
    name: string;
    description: string;
    category: string
}

const ProductCard: FC<IProductCardProps> = (props: IProductCardProps) => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={styles.productCard}>

            <div className={styles.infoContainer}>
                <div className={styles.categoryContainer}>{props.category}<span>{'>'}</span>{trunscateString(props.name, 25)}</div>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{props.price} руб.</div>
                <div className={styles.buttonContainer}><ShoppingCartButton count={counter} setCount={setCounter} /></div>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.imageLayer}>
                    {props.image ?
                        <img src={props.image} alt={props.name} className={styles.image} /> :
                        <LuImageOff className={styles.noImage} />
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductCard;