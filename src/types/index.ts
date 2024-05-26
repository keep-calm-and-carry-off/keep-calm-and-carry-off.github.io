import { IProduct } from 'src/api/types';

export type ProfileState = {
  id: string;
  login: string;
  password: string;
  accessLevel: number;
  firstName: string;
  middleName: string;
  lastName: string;
  birthday: string;
  mail: string;
};

export type Cart = {
  userId: string;
  products: ICartProduct[];
};
export interface ICartProduct extends IProduct {
  quantity: number;
}

export type Category = {
  id: string;
  name: string;
  photo?: string;
};

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type AuthState = {
  token: string;
  isAuthenticated: boolean;
  accessLevel: number;
  id: string;
};

type ICartState = ICartProduct;

export type ProductState = Product[];

export type CartState = ICartState[];

export type ModalState = {
  isOpen: boolean;
};
export type LoginPWD = {
  email: string;
  password: string;
};

export type ActionAuth = {
  payload: LoginPWD;
  type: string;
};
