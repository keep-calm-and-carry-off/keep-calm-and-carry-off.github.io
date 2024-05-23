import React, { FC, useState } from 'react';
import { PageContainer } from 'src/components/Page Container';
import { ProductsCart } from 'src/components/Products Cart';

export const CartPage: FC = () => {
  return (
    <PageContainer>
      <ProductsCart />
    </PageContainer>
  );
  //return
};
