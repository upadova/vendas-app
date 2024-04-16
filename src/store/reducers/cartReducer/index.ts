import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartType } from '../../../shared/types/cartType';

interface CartStore {
  cart?: CartType;
}

const initialState: CartStore = {
  cart: undefined,
};

export const cartSlice = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    setCartsAction: (state, action: PayloadAction<CartType>) => {
      state.cart = action.payload;
    },
  },
});

export const { setCartsAction } = cartSlice.actions;
export default cartSlice.reducer;
