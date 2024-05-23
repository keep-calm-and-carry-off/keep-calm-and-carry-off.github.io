import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ICategory } from 'src/api/types';
import { PageContainer } from 'src/components/Page Container';
import { ProductCategories } from 'src/components/Product Categories';
import { getCategories } from 'src/stores/sagaStore/slices/products';

export const HomePage: FC = () => {
  const categories = useSelector(getCategories);
  console.log(categories);
  // const products = useSelector(getProducts)
  return (
    <PageContainer>
      <ProductCategories />
    </PageContainer>
  );
};
