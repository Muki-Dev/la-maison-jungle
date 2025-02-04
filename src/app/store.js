 import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from '../features/CartSlice';
 import categoryReducer from '../features/CategorySlice';
 import modalReducer from '../features/modalSlice';
 import AuthReducer from '../features/AuthSlice';
 import userReducer from '../features/UserSlice'

 const store = configureStore({
   reducer:{
      auth: AuthReducer,
      modal: modalReducer,
      cart: cartReducer,
      category: categoryReducer,
      user: userReducer,
   }
 })

 export default store;