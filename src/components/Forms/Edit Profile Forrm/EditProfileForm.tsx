import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authController } from 'src/stores/globalStore/auth';
import { editProfile } from 'src/stores/globalStore/globalStore';
import { getProfile } from 'src/stores/globalStore/profile';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: string;
  mail: string;
  password: string;
}

export const EditProfileForm: React.FC = () => {
  const userId = useSelector(authController.getAuthUserId)
  const initialValues = useSelector(getProfile)
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues: initialValues,
  });
  const dispatch = useDispatch()

  const onSubmit = (data: ProfileFormData) => {
    dispatch(editProfile({...initialValues, ...data}));
    alert('Профиль обновлен')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя:</label>
        <input type="text" {...register('firstName', { required: true })} />
        {errors.firstName && <span>Введите имя</span>}
      </div>
      <div>
        <label>Фамилия:</label>
        <input type="text" {...register('lastName', { required: true })} />
        {errors.lastName && <span>Введите фамилию</span>}
      </div>
      <div>
        <label>Отчество:</label>
        <input type="text" {...register('middleName')} />
      </div>
      <div>
        <label>Дата рождения:</label>
        <input type="date" {...register('birthday', { required: true })} />
        {errors.birthday && <span>Введите дату рождения</span>}
      </div>
      <div>
        <label>E-mail:</label>
        <input type="email" {...register('mail', { required: true })} />
        {errors.mail && <span>Введите корректный e-mail</span>}
      </div>
      <div>
        <label>Пароль:</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>Введите пароль</span>}
      </div>
      <button type="submit">Сохранить</button>
    </form>
  )
}