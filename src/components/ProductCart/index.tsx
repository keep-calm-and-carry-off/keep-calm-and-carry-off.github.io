import React, { ChangeEvent, FC, useState } from "react";
import * as styles from './styles.module.scss'
import { LuImageOff } from "react-icons/lu";
import { LuChevronDown, LuChevronUp, LuXCircle, LuPen   } from "react-icons/lu";


export interface IProductCart {
    name: string,
    price: number,
    qty: number,
    setQty: (value: number) => void
    image?: string,
    onEdit?: () => void
    onDelete?: () => void
}

const ProductCart: FC<IProductCart> = (props: IProductCart) => {
    const [count, setCount] = useState(props.qty)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^\d]/g, '');
        setCount(Number(value)) 
    };
    return (
        <div className={styles.productCartContainer}>
            <hr />
            <div className={styles.productCartInfo}>
                <div className={styles.productCartInfoImg}>
                    {props.image ?
                        <img src={props.image} alt={props.name} /> :
                        <LuImageOff />
                    }
                </div>
                <div className={styles.productCartName}>{props.name}</div>
                <div className={styles.productCartPrice}>{props.price} руб.</div>
                <div className={styles.productCartQty}>
                    <input type="text" value={count} onChange={handleChange} />
                    <div className={styles.productCartQtyIncrement}>
                        <LuChevronUp onClick={() => setCount(count + 1)} />
                        <LuChevronDown onClick={
                            () => {
                                if(count == 0) return undefined
                                else setCount(count - 1)
                            }
                        } />
                    </div>

                </div>
                <div className={styles.productCartPrice}>{count * props.price} руб.</div>
                <div className={styles.productCartControls}>
                    <LuXCircle onClick={props.onDelete}/>
                    <LuPen onClick={props.onEdit}/>
                </div>
            </div>
        </div >
    )
}
export default ProductCart