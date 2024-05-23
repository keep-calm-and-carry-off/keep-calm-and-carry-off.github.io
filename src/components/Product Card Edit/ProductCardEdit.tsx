import React, { Dispatch, FC, SetStateAction, useEffect, useLayoutEffect, useState } from 'react';
import { useProduct } from 'src/helpers/providers/ProductProvider';
import { Product } from 'src/homeworks/ts1/3_write';
import { Controller, useForm } from 'react-hook-form';
import * as styles from './styles.module.scss';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getCategories, getGameById, updateProductRequest } from 'src/stores/sagaStore/slices/products';
import { useDispatch } from 'react-redux';
import { ICategory } from 'src/api/types';
import ButtonOtus from '../ButtonOtus';
import { useModal } from 'src/hooks/useModal';

interface IProductCardEdit {
  productId: string;
}

type FormData = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
};

export const ProductCardEdit: FC<IProductCardEdit> = (props) => {
  const product = useSelector(getGameById(props.productId));
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const modal = useModal();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: { ...product },
  });

  const handleFormSubmit = (data: FormData) => {
    dispatch(updateProductRequest(data));
    modal.close();
  };

  return (
    <>
      <Typography variant="h6">Редактирование товара</Typography>
      {product ? (
        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="d-flex flex-row">
            <Box className={styles.formInput}>
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Поле обязательно для заполнения' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className={styles.inputMui}
                    type="text"
                    label="Наименование"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </Box>
            <Box className={styles.formInput}>
              <Controller
                name="photo"
                control={control}
                rules={{ required: 'Поле обязательно для заполнения' }}
                render={({ field }) => (
                  <TextField {...field} type="text" label="Ссылка на фото" variant="outlined" fullWidth />
                )}
              />
              {errors.photo && <span>{errors.photo.message}</span>}
            </Box>
          </div>

          <Box className={styles.formInput}>
            <Controller
              name="desc"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className={styles.inputMui}
                  type="text"
                  label="Описание"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Box>
          <div className="d-flex flex-row">
            <Box className={styles.formInput}>
              <Controller
                name="oldPrice"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className={styles.inputMui}
                    type="number"
                    label="Старая цена"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </Box>
            <Box className={styles.formInput}>
              <Controller
                name="price"
                control={control}
                rules={{ required: 'Поле обязательно для заполнения' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className={styles.inputMui}
                    type="number"
                    label="Цена в руб."
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
              {errors.price && <span>{errors.price.message}</span>}
            </Box>
          </div>

          <Box className={styles.formInput}>
            <Controller
              name="categoryId"
              control={control}
              rules={{ required: 'Поле обязательно для заполнения' }}
              render={({ field }) => (
                <TextField {...field} className={styles.inputMui} label="Категория" variant="outlined" fullWidth select>
                  {categories.map((option: ICategory) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            {errors.categoryId && <span>{errors.categoryId.message}</span>}
          </Box>
          <hr />
          <ButtonOtus type="submit" fullWidth>
            Изменить игру
          </ButtonOtus>
        </form>
      ) : (
        <div>Неизвестный товар</div>
      )}
    </>
  );
};
