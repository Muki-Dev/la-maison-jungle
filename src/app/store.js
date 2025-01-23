 import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from '../features/CartSlice';
 import categoryReducer from '../features/CategorySlice';
 import modalReducer from '../features/modalSlice';
 import AuthReducer from '../features/AuthSlice';

 const store = configureStore({
   reducer:{
      auth: AuthReducer,
      modal: modalReducer,
      cart: cartReducer,
      category: categoryReducer,
   }
 })

 export default store;