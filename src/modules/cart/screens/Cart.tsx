import { useEffect } from "react";
import Text from "../../../shared/components/text/Text";
import { useCartReducer } from "../../../store/reducers/cartReducer/useCartReducer";
import { useRequest } from "../../../shared/hooks/useRequest";
import { CART_URL } from "../../../shared/constants/urls";
import { MethodEnum } from "../../../enums/methods.enums";
import { CartType } from "../../../shared/types/cartType";

export const Cart = ()=>{
    
    const {cart, setCart} = useCartReducer();
    const {request} = useRequest();
    useEffect(()=>{
        request<CartType>({
            url: CART_URL,
            method: MethodEnum.GET,
            saveGlobal: setCart
        })
    },[])
    console.log('cart', cart);
    return(
        <Text>
            Carrinho
        </Text>
    )
}

export default Cart;