import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { IUser } from 'src/api/types';
import { getProfile } from 'src/stores/sagaStore/slices/user';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: string;
  mail: string;
  password: string;
}

export const EditProfileForm: React.FC = () => {
  const initialValues = useSelector(getProfile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: initialValues,
  });
  const dispatch = useDispatch();

  const onSubmit = (data: IUser) => {
    // dispatch(editProfile({ ...initialValues, ...data }));
    alert('Профиль обновлен');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Логин:</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span>Введите имя</span>}
      </div>
      <div>
        <label>e-mail:</label>
        <input type="text" {...register('email', { required: true })} />
        {errors.email && <span>Введите e-mail</span>}
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
};
