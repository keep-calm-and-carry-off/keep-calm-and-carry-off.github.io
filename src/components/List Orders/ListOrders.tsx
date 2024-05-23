import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IOrder, IOrderProduct } from 'src/api/types';
import { fetchOrdersRequest, getOrdersByUserId } from 'src/stores/sagaStore/slices/order';
import { getProfile } from 'src/stores/sagaStore/slices/user';
import * as styles from './styles.module.scss';
import { getCartProductById } from 'src/stores/sagaStore/slices/cart';
import { getGameById } from 'src/stores/sagaStore/slices/products';

export const OrderItem: FC<{ order: IOrder; dataPosition: string }> = ({ order, dataPosition }) => {
  const date = new Date(order.updatedAt);
  const day = date.getDate() < 10 ? '0' + date.getDate().toString() : date.getDate();
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1;
  const fullDate = day + '.' + month + '.' + date.getFullYear();
  const orderPrice = order.products.reduce(
    (total: number, product: IOrderProduct) => total + product.quantity * product.product.price,
    0
  );
  console.log(order);
  return (
    <div className={styles.orderItemContainer}>
      <div className="d-flex flex-row align-items-space-around">
        <div className={styles.orderItemHeader}>
          <div className="w-50 text-start">Заказ от {fullDate}</div>
          <div className="w-50 text-end">{orderPrice} руб.</div>
          <div className={styles.orderItemNumber}>{dataPosition}</div>
        </div>

        <hr />
      </div>

      <div className="d-flex flex-row flex-wrap">
        {order.products.map((product: IOrderProduct) => {
          return <OrderProduct key={product.product.id} productId={product.product.id} quantity={product.quantity} />;
        })}
      </div>
    </div>
  );
};

const OrderProduct: FC<{ productId: string; quantity: number }> = ({ productId, quantity }) => {
  const product = useSelector(getGameById(productId));
  return (
    <div className='d-flex flex-column w-25'>
      {product && (
        <>
          <div className={styles.productContainer}>
            <img src={product.photo} alt={product.name} />
            <div className={styles.productQuantity}>x{quantity}</div>
          </div>
          <div className='text-center'>{quantity * product.price} руб.</div>
        </>
      )}
    </div>
  );
};

export const ListOrders: FC = () => {
  const user = useSelector(getProfile);
  const orders = useSelector(getOrdersByUserId(user.id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrdersRequest());
  }, [dispatch, user.id]);

  if (orders.length === 0) {
    return (
      <>
        <p>Вы еще не создавали заказов. Перейдите в корзину, чтобы сделать свой первый заказ.</p>
      </>
    );
  }

  return (
    <>
      {orders.map((order: IOrder, index: number) => (
        <OrderItem key={order.id} order={order} dataPosition={`00${(index + 1).toString()}@${user.email}`} />
      ))}
    </>
  );
};
