import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/useReducer";

export const store = configureStore({
    reducer:{
        useReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store;