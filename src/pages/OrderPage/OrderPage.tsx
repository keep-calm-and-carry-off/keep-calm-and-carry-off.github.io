import React, { FC, useEffect } from 'react';
import { ListOrders } from 'src/components/List Orders/ListOrders';
import { PageContainer } from 'src/components/Page Container';

export const OrderPage: FC = () => {
  return (
    <PageContainer>
      <ListOrders/>
    </PageContainer>
  );
  // return <EditProfileForm />
};
