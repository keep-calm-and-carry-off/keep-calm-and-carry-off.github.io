import React, { FC } from 'react';
import { PageContainer } from 'src/components/Page Container';
import { ProductCategories } from 'src/components/Product Categories';

export const HomePage: FC = () => {
  return (
    <PageContainer>
      <ProductCategories />
    </PageContainer>
  );
};
