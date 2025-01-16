 import { configureStore } from "@reduxjs/toolkit";
 import cartReducer from '../features/CartSlice';
 import CategoryReducer from '../features/CategorySlice'

 const store = configureStore({
   reducer:{
      cart: cartReducer,
      category: CategoryReducer,
   }
 })

 export default store;