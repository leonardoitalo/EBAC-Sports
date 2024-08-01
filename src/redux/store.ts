import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/slice";
import logger from "redux-logger";
import { apiSlice } from "./api/slice";
import favoriteReducer from "./favorite/slice";

const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        products: productReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(logger)
            .concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
