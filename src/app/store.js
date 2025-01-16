 import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from '../features/CartSlice';
 import categoryReducer from '../features/CategorySlice';
 import modalReducer from '../features/modalSlice'

 const store = configureStore({
   reducer:{
      modal: modalReducer,
      cart: cartReducer,
      category: categoryReducer,
   }
 })

 export default store;