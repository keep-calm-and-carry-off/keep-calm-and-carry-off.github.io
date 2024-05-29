import React from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import * as styles from './styles.module.scss';
import { Box, TextField } from '@mui/material';
import ButtonOtus from 'src/components/ButtonOtus';
import { useDispatch } from 'react-redux';
import { useModal } from 'src/hooks/useModal';
import { authRequest } from 'src/stores/sagaStore/slices/user';

type Inputs = {
  login: string;
  password: string;
};

export const AuthForm: React.FC = () => {
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
      login: '',
      password: '',
    },
  });

  const customHandleSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      authRequest({
        email: data.login,
        password: data.password,
      })
    );
    reset();
    modal.close();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(customHandleSubmit)}>
      <Box className={styles.formInput}>
        <Controller
          name="login"
          control={control}
          rules={{ required: 'Email обязателен' }}
          render={({ field }) => (
            <TextField
              {...field}
              className={styles.inputMui}
              type="text"
              label="e-mail"
              variant="outlined"
              fullWidth
              error={!!errors.login}
              helperText={errors.login ? errors.login.message : ''}
            />
          )}
        />
      </Box>
      <Box className={styles.formInput}>
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Пароль обязателен' }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Пароль"
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          )}
        />
      </Box>
      <hr />
      <ButtonOtus type="submit" fullWidth>
        Войти
      </ButtonOtus>
    </form>
  );
};
