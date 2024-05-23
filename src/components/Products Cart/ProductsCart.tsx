import React, { FC } from 'react';
import * as styles from './styles.module.scss';
import { Typography } from '@mui/material';
import { ProductItem } from './ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, getTotalPrice, selectCart } from 'src/stores/sagaStore/slices/cart';
import { getIsAuth, getProfile } from 'src/stores/sagaStore/slices/user';
import ButtonOtus from '../ButtonOtus';
import { createOrderRequest } from 'src/stores/sagaStore/slices/order';
import { IOrderProduct, IOrderStatus, IProductOrderRequest } from 'src/api/types';

const Products: FC<{ products: IOrderProduct[] }> = ({ products }) => (
  <>
    {products.map(
      (product: IOrderProduct) =>
        product && product.product && <ProductItem product={product} key={product.product.id} />
    )}
  </>
);

export const ProductsCart: FC = () => {
  const total = useSelector(getTotalPrice);
  const { products } = useSelector(selectCart);
  const isAuth = useSelector(getIsAuth);
  const user = useSelector(getProfile);
  const dispatch = useDispatch();
  console.log(total);

  const createOrder = () => {
    const productsWithOnlyId: IProductOrderRequest[] = [];
    products.map((productCart: IOrderProduct) => {
      productsWithOnlyId.push({
        id: productCart.product.id,
        quantity: productCart.quantity,
      });
    });
    dispatch(
      createOrderRequest({
        user: user,
        products: productsWithOnlyId,
        status: IOrderStatus.PendingConfirmation,
      })
    );
    dispatch(clearCart());
  };

  if (products.length === 0) {
    return <>Нет товара</>;
  }

  return (
    <div className="d-flex flex-column p-5 m-0 border">
      <Products products={products} />
      <div className={styles.cartTotal}>
        <Typography variant="subtitle1" style={{ fontWeight: 700, fontSize: '24px' }}>
          Итого: {total} руб.
        </Typography>
      </div>
      {isAuth ? (
        <ButtonOtus onClick={createOrder}>Оформить заказ</ButtonOtus>
      ) : (
        <>Для создания заказа необходимо авторизоваться!</>
      )}
    </div>
  );
};
