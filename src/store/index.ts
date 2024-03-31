import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./reducers/useReducer";
import globalReducer from "./reducers/globalReducer";

export const store = configureStore({
    reducer:{
        useReducer,
        globalReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export default store;