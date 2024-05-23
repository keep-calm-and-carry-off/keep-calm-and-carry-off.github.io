import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as styles from './styles.module.scss';
import { Box, TextField } from '@mui/material';
import ButtonOtus from 'src/components/ButtonOtus';
import { useDispatch } from 'react-redux';
import { useModal } from 'src/hooks/useModal';
import { regRequest } from 'src/stores/sagaStore/slices/user';

type Inputs = {
  email: string;
  password: string;
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const modal = useModal();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<Inputs>();
  const formOptions = {
    email: {
      required: 'e-mail обязателен для ввода',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Неверный адрес электронной почты',
      },
    },
    password: {
      required: 'Пароль обязателен для ввода',
    },
  };
  const onSubmit = (data: Inputs) => {
    const { email, password } = data;
    dispatch(regRequest({ email, password }));
    reset();
    modal.close();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Box className={styles.formInput}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} className={styles.inputMui} type="text" label="e-mail" variant="outlined" fullWidth />
          )}
        />
      </Box>
      <Box className={styles.formInput}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <TextField {...field} type="password" label="Пароль" variant="outlined" fullWidth />}
        />
      </Box>
      <hr />
      <ButtonOtus type="submit" fullWidth>
        Регистрация
      </ButtonOtus>
    </form>
  );
};
