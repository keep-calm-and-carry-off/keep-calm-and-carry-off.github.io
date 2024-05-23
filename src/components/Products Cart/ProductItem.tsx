import Typography from '@mui/material/Typography';
import React, { FC, useState } from 'react';
import * as styles from './styles.module.scss';
import ShoppingCartButton from '../ShoppingCartButton';
import Divider from '@mui/material/Divider';
import cn from 'classnames';
import { ICartProduct } from 'src/types';
import { useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { IOrderProduct, IProduct } from 'src/api/types';
import { IProductCart } from '../ProductCart';
import { removeFromCart } from 'src/stores/sagaStore/slices/cart';

interface IProductItem {
  product: IOrderProduct;
}

export const ProductItem: FC<IProductItem> = (props) => {
  const productCart = props.product;
  const dispatch = useDispatch();
  const deleteFromCart = () => dispatch(removeFromCart({ productId: productCart.product.id }));

  return (
    <>
      {productCart && (
        <>
          <div key={props.product.product.id} className={styles.gameContainer}>
            <div key={props.product.product.id + '_img'} className={cn('col-1', styles.heightCartItem)}>
              <img className={styles.gameImgContainer} src={productCart.product.photo} alt={productCart.product.name} />
            </div>
            <div key={props.product.product.id + '_name'} className="col-4 px-3">
              <Typography variant="subtitle1">{productCart.product.name}</Typography>
            </div>
            <div key={props.product.product.id + '_price'} className="col-1 px-3">
              <Typography variant="subtitle1">{productCart.product.price} руб.</Typography>
            </div>
            <div key={props.product.product.id + '_quantity'} className="col-3 px-3">
              <ShoppingCartButton productId={productCart.product.id} />
            </div>
            <div key={props.product.product.id + '_finalPrice'} className="col-2 px-3">
              <Typography variant="subtitle1">{productCart.product.price * productCart.quantity} руб.</Typography>
            </div>
            <div key={props.product.product.id + '_deleteFromCart'} className="col-1 px-3">
              <AiFillDelete onClick={deleteFromCart} style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }} />
            </div>
          </div>
          <Divider key={props.product.product.id + '_divider'} className={styles.gameDivider} />
        </>
      )}
    </>
  );
};
