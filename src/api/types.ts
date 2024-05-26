// Общий ответ
export interface IResponse<T> {
  ok: boolean;
  status: number;
  data: T;
}

// Тип данных пользователя
export interface IUser {
  id: string;
  name?: string;
  email: string;
  signUpDate: Date;
}

// Тип данных при ошибке
export interface IDataErrorResponse {
  errors: {
    name: string;
    stack: string;
    message: string;
    extensions: {
      code: string;
    };
  }[];
}

// Тип данных авторизации при успешном ответе
export interface IAuthSuccessResponse {
  token: string;
  profile: IProfileResponseAuth;
}

export interface IProfileResponseAuth {
  id: string;
  signUpDate: string;
  email: string;
  commandId: string;
  password: string;
  __v: number;
}

export type ChangePasswordBodyRq = {
  password: string;
  newPassword: string;
};

export type ChangePasswordResult = {
  success: boolean;
};
export type ChangePwdResponse = IResponse<ChangePasswordResult | IDataErrorResponse>;

export type TypeAuthResponse = IResponse<IAuthSuccessResponse | IDataErrorResponse>;

// Тип данных профиля
export interface IProfile {
  id: string;
  name: string;
  email: string;
  signUpDate: Date;
}

export type TypeProfileResponse = IResponse<IProfile | IDataErrorResponse>;

// Тип данных категории
export interface ICategories {
  data: ICategory[];
  pagination: IPagination;
  sorting: ISorting;
}

export interface ICategory {
  id: string;
  name: string;
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
  commandId?: string;
}

export interface ICategoryAddRequest {
  name: string;
  photo?: string;
}

export type TypeCategoryResponse = IResponse<ICategory | IDataErrorResponse>;

// Тип данных продуктов
export interface IProducts {
  data: IProduct[];
  pagination: IPagination;
  sorting: ISorting;
}

export interface IProduct {
  commandId?: string;
  id: string;
  name: string;
  photo?: string;
  desc?: string;
  createdAt: Date;
  updatedAt: Date;
  oldPrice?: number;
  price: number;
  category: ICategory;
}

export type TypeProductsResponse = IResponse<IProducts | IDataErrorResponse>;
export type TypeProductResponse = IResponse<IProduct | IDataErrorResponse>;

// Тип данных заказов
export interface IOrder {
  id?: string;
  products: IOrderProduct[];
  user: IUser;
  status?: IOrderStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IOrderProduct {
  _id?: string;
  product: IProduct;
  quantity: number;
}

export enum IOrderStatus {
  PendingConfirmation = 'pending_confirmation',
  Processing = 'processing',
  Packaging = 'packaging',
  WaitingForDelivery = 'waiting_for_delivery',
  InTransit = 'in_transit',
  Delivered = 'delivered',
  ReturnRequested = 'return_requested',
  OrderCancelled = 'order_cancelled',
}

export interface IProductOrderRequest {
  id: string;
  quantity: number;
}

export interface IOrderCreateRequest {
  products: IProductOrderRequest[];
  user: IUser;
  status: IOrderStatus;
}

export type TypeOrderResponseSuccess = {
  data: IOrder[];
  pagination: IPagination;
  sorting: ISorting;
};
export type TypeOrderResponseCreate = IResponse<IOrder | IDataErrorResponse>;

export type TypeOrderResponseAllDataRS = IResponse<TypeOrderResponseSuccess | IDataErrorResponse>;

// Тип данных пагинации
export interface IPagination {
  pageSize?: number;
  pageNumber?: number;
  total?: number;
}

// Тип данных сортировки
export interface ISorting {
  type: 'ASC' | 'DESC';
  field: 'id' | 'name' | 'createdAt' | 'updatedAt';
}
