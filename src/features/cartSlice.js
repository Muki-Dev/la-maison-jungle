
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state,action) => {
            const plant = state.find((item) => item.id ===  action.payload.id);
            if(plant){
                plant.amount += 1;
            }else{
                state.push({...action.payload, amount: 1})
            }
        },
        removeItem: (state,action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        clearCart: () => {
            return []
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;