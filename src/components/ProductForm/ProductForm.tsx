import React from "react";
import { useForm } from "react-hook-form";
import * as styles from './styles.module.scss';


type Inputs = {
  name: string;
  description: string;
  price: number;
  img: string;
};

export const ProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      img: "",
    },
  });

  const customHandleSubmit = (values: any) => {
    alert(JSON.stringify(values))

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(customHandleSubmit)}>
      <h1>Добавление/Редактирование продукта</h1>

      <div className={styles.formInput}>
        <label htmlFor="name">Наименование</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: true,
            minLength: {
              value: 3,
              message: "Минимально допустимо 3 символа",
            },
          })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div className={styles.formInput}>
        <label htmlFor="description">Описание</label>
        <input id="description"
          type="text"
          {...register("description", {
            required: true,
            minLength: {
              value: 3,
              message: "Минимально допустимо 3 символа",
            },
          })} />
        {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
      </div>
      <div className={styles.formInput}>
        <label htmlFor="price">Цена</label>
        <input id="price"
          type="number"
          {...register("price", {
            required: true,
          })} />
        {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
      </div>
      <div className={styles.formInput}>
        <label htmlFor="img">Ссылка на фото</label>
        <input id="img"
          type="text"
          {...register("img")} />
        {errors.img && <p style={{ color: "red" }}>{errors.img.message}</p>}
      </div>
      <hr />
      <button type="submit" disabled={!isValid}>Отправить</button>
    </form>
  );
};