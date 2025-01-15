import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cartSlice';
import filterReducer from '../features/filterSlice';
import modalReducer from '../features/modalSlice';

const store = configureStore({
   reducer:[
    cart: cartReducer,
    filters: filterReducer,
    modal: modalReducer
   ]
})

export default store

