import React from 'react';
import { useForm } from 'react-hook-form';

interface ProfileFormData {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  email: string;
  password: string;
}

export const EditProfileForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormData>();

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
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
        <input type="date" {...register('dateOfBirth', { required: true })} />
        {errors.dateOfBirth && <span>Введите дату рождения</span>}
      </div>
      <div>
        <label>E-mail:</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>Введите корректный e-mail</span>}
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