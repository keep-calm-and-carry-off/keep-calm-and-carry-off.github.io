import { rootReducer } from "src/stores/globalStore/globalStore"

export type ProfileState = {
    id: string,
    login: string,
    password: string,
    accessLevel: number
    firstName: string,
    middleName: string,
    lastName: string,
    birthday: string,
    mail: string
}

export type Cart = {
    userId: string,
    products: ICartProduct[]
}
export interface ICartProduct extends Product {
    quantity: number
}

export type Category = {
    id: string,
    name: string,
    photo?: string
}

export type Product = {
    id: string,
    name: string,
    photo: string,
    desc?: string,
    createdAt: string,
    oldPrice?: number,
    price: number,
    category: Category
}

export type AuthState = {
    token: string;
    isAuthenticated: boolean;
    accessLevel: number;
    id: string;
}

interface ICartState extends ICartProduct { }

export type ProductState = Product[]

export type CartState = ICartState[]

export type ModalState = {
    isOpen: boolean
}

export type RootState = ReturnType<typeof rootReducer>
export type LoginPWD = {
    login: string,
    password: string
}

export type ActionAuth = {
    payload: LoginPWD,
    type: string
}