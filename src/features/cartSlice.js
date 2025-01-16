
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state,action) => {
            const plant = state.find((item) => item.id ===  action.payload.id);
            if(plant){
                plant.amount += 1;
            }else{
                state.push({...action.payload, amount: 1})
            }
        },
        removeToCart: (state,action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        clearToCart: () => {
            return []
        },
    },
});

export const { addToCart, removeToCart, clearToCart } = cartSlice.actions;
export default cartSlice.reducer;