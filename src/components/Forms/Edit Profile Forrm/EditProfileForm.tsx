import { Box, TextField } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { ChangePasswordBodyRq, IUser } from 'src/api/types';
import ButtonOtus from 'src/components/ButtonOtus';
import { editProfilePasswordRequest, getProfile } from 'src/stores/sagaStore/slices/user';
import * as styles from './styles.module.scss';

export const EditProfileForm: React.FC = () => {
  const initialValues = useSelector(getProfile);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ChangePasswordBodyRq>({
    defaultValues: {
      password: '',
      newPassword: '',
    },
  });
  const dispatch = useDispatch();

  const onSubmit = (data: ChangePasswordBodyRq) => {
    dispatch(editProfilePasswordRequest({ ...data }));
    console.log('изменился');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <p>Изменить пароль</p>
      <Box className={styles.formInput}>
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Старый пароль обязателен' }}
          render={({ field }) => (
            <TextField
              {...field}
              className={styles.inputMui}
              type="password"
              label="Старый пароль"
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          )}
        />
      </Box>
      <Box className={styles.formInput}>
        <Controller
          name="newPassword"
          control={control}
          rules={{ required: 'Новый пароль обязателен' }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Новый пароль"
              variant="outlined"
              fullWidth
              error={!!errors.newPassword}
              helperText={errors.newPassword ? errors.newPassword.message : ''}
            />
          )}
        />
      </Box>
      <hr />
      <ButtonOtus type="submit" fullWidth>
        Сохранить изменения
      </ButtonOtus>
    </form>
  );
};
