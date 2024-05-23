import { useSelector } from "react-redux"
import { getAllProductsInCart, getProductCartById, getTotalPrice } from "src/stores/globalStore/cart"
import { getProductById, getProducts } from "src/stores/globalStore/product"
import { ICartProduct } from "src/types"

export const useProducts = (productId?:string) => {
    const allProducts = useSelector(getProducts)
    const product = useSelector(getProductById(productId))
    const productCart = useSelector(getProductCartById(productId))
    const allProductsInCart:ICartProduct[] = useSelector(getAllProductsInCart())
    const totalPrice:number = useSelector(getTotalPrice)
    return { allProducts, product, productCart, allProductsInCart, totalPrice}
}