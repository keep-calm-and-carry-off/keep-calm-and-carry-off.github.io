import { Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { IProduct } from 'src/api/types';
import ButtonOtus from '../../ButtonOtus';
import { Link } from 'react-router-dom';
import { ProductListEdit } from 'src/components/Product List Edit';

export const ProductsControl: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const linkCreate = `?showModal=true&content=createGame`;

  return (
    <div>
      <Typography variant="h6">Список доступных игр</Typography>

      <Link to={linkCreate}>
        <ButtonOtus>Создать новую игру</ButtonOtus>
      </Link>
      <ProductListEdit />
    </div>
  );
};
