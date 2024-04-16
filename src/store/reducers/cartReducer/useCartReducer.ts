import { useDispatch } from 'react-redux';
import { CartType } from '../../../shared/types/cartType';
import { useAppSelector } from '../../hooks';
import { setCartsAction } from '.';

export const useCartReducer = () => {
  const dispatch = useDispatch();
  const { cart } = useAppSelector((state) => state.cartReducer);
  const setCart = (currentCart: CartType) => {
    dispatch(setCartsAction(currentCart));
  };

  return {
    cart,
    setCart,
  };
};
