 import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from '../features/CartSlice';
 import categoryReducer from '../features/CategorySlice';
 import modalReducer from '../features/modalSlice';
 import userReducer from '../features/userSlice';

 const store = configureStore({
   reducer:{
      modal: modalReducer,
      cart: cartReducer,
      category: categoryReducer,
      user: userReducer
   }
 })

 export default store;