import React, { FC, useState } from 'react';
import * as styles from './styles.module.scss';
import { LuImageOff } from "react-icons/lu";
import ShoppingCartButton from '../ShoppingCartButton';

export interface IShortProductCardProps {
    price: number;
    image?: string;
    name: string;
    description: string;
}

const ShortProductCard: FC<IShortProductCardProps> = (props: IShortProductCardProps) => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={styles.shortProductCard}>
            <div className={styles.imageContainer}>
                {props.image ?
                    <img src={props.image} alt={props.name} className={styles.image} /> : 
                    <LuImageOff className={styles.noImage}/>
                }
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{props.price} руб.</div>
                <div className={styles.buttonContainer}><ShoppingCartButton count={counter} setCount={setCounter} /></div>
            </div>
        </div>
    );
};

export default ShortProductCard;