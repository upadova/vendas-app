import { configureStore } from '@reduxjs/toolkit';
import useReducer from './reducers/useReducer';
import globalReducer from './reducers/globalReducer';
import productReducer from './reducers/productReducer';

export const store = configureStore({
  reducer: {
    useReducer,
    globalReducer,
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
