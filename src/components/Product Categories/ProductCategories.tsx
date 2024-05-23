import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { ICategory } from 'src/api/types';
import { getCategories } from 'src/stores/sagaStore/slices/products';
import * as styles from './styles.module.scss';
import classnames from 'classnames';
import ProductList from '../Product List';

const Categories: FC<{ categories: ICategory[]; catId: string; setCatId: (id: string) => void }> = ({
  categories,
  catId,
  setCatId,
}) => {
  return (
    <div>
      <div
        className={classnames(styles.categoryItem, {
          [styles.activeCategory]: catId === '',
        })}
        key={'allgames'}
        onClick={() => setCatId('')}
      >
        Все игры
      </div>
      {categories.map((category) => (
        <div
          className={classnames(styles.categoryItem, {
            [styles.activeCategory]: catId === category.id,
          })}
          key={category.id}
          onClick={() => setCatId(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export const ProductCategories: FC = () => {
  const categories = useSelector(getCategories);
  const [catId, setCatId] = useState<string>('');

  return (
    <div className='d-flex'>
      <div className="col-2">
        <Categories categories={categories} catId={catId} setCatId={setCatId} />
      </div>
      <div className='col-10'>
        <ProductList categoryId={catId}/>
      </div>
    </div>
  );
};
