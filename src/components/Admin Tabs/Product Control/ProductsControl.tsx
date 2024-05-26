import { Typography } from '@mui/material';
import React, { FC } from 'react';
import ButtonOtus from '../../ButtonOtus';
import { Link } from 'react-router-dom';
import { ProductListEdit } from 'src/components/Product List Edit';

export const ProductsControl: FC = () => {
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
