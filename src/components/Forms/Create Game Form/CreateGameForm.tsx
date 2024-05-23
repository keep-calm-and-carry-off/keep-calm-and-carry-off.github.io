import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as styles from './styles.module.scss';
import { TextField, Box, MenuItem } from '@mui/material';
import ButtonOtus from 'src/components/ButtonOtus';
import { useDispatch } from 'react-redux';
import { useModal } from 'src/hooks/useModal';
import { addCategoryRequest, addProductRequest, getCategories } from 'src/stores/sagaStore/slices/products';
import { useSelector } from 'react-redux';
import { ICategory } from 'src/api/types';

type Inputs = {
  name: string;
  photo: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
};

export const CreateGameForm = () => {
  const dispatch = useDispatch();
  const modal = useModal();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      photo: '',
      desc: '',
      oldPrice: 0,
      price: 0,
      categoryId: '',
    },
  });

  const categories = useSelector(getCategories);

  const customHandleSubmit = (data: Inputs) => {
    dispatch(addProductRequest({ ...data }));
    reset();
    modal.close();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(customHandleSubmit)}>
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
        Добавить игру
      </ButtonOtus>
    </form>
  );
};
