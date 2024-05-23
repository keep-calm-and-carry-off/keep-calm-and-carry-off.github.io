import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as styles from './styles.module.scss';
import { TextField, Typography, Box } from '@mui/material';
import ButtonOtus from 'src/components/ButtonOtus';
import { useDispatch } from 'react-redux';
import { useModal } from 'src/hooks/useModal';
import { addCategoryRequest } from 'src/stores/sagaStore/slices/products';

type Inputs = {
  name: string;
  photo?: string;
};

export const CreateCategoryForm = () => {
  const dispatch = useDispatch();
  const modal = useModal();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      photo: '',
    },
  });

  const customHandleSubmit = (data: Inputs) => {
    dispatch(
      addCategoryRequest({
        name: data.name,
        photo: data.photo,
      })
    );
    reset();
    modal.close();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(customHandleSubmit)}>
      <Box className={styles.formInput}>
        <Controller
          name="name"
          control={control}
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
      </Box>
      <Box className={styles.formInput}>
        <Controller
          name="photo"
          control={control}
          render={({ field }) => (
            <TextField {...field} type="text" label="Ссылка на иконку" variant="outlined" fullWidth />
          )}
        />
      </Box>
      <hr />
      <ButtonOtus type="submit" fullWidth>
        Создать категорию
      </ButtonOtus>
    </form>
  );
};
