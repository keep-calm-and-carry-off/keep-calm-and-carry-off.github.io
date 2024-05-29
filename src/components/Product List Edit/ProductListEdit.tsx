import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from 'src/helpers/providers/ProductProvider';
import { Product } from 'src/homeworks/ts1/3_write';
import * as styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from 'src/api/types';
import { fetchProductsRequest, getProducts } from 'src/stores/sagaStore/slices/products';

export const ProductListEdit: FC = () => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(getProducts);
  const [products, setProducts] = useState<IProduct[]>([]);
  const linkCreate = `?showModal=true&content=createGame`;
  useEffect(() => {
    if (selectedCategories.length === 0) {
      dispatch(fetchProductsRequest());
      setProducts(selectedCategories);
    } else {
      setProducts(selectedCategories);
    }
  }, [products]);
  if (products.length == 0) return <>Нет товара для редактирования.</>;

  const productWithEdit = products.map((game: IProduct) => {
    const link = `?showModal=true&content=editProduct&productId=${game.id}`;
    return (
      <div className={styles.gameContainer + ' col-3'} key={game.id}>
        <div className={styles.gameBody}>
          <div className={styles.gameTitle} title={game.name}>{game.name}</div>
          <div className={styles.gamePhoto}>
            <img src={game.photo} alt={game.name} />
          </div>
          <div className={styles.gameDesc}>{game.desc}</div>
          <div>{game.price} руб.</div>
          <div>{game.category.name}</div>
          <Link to={link}>Редактировать</Link>
        </div>
      </div>
    );
  });
  return <div className={styles.productsContainer}>{productWithEdit.map((item: ReactNode) => item)}</div>;
};
