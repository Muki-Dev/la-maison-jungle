import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name:'category',
    initialState:{
        activeCategories: [],
    },
    reducers:{
        toggleCategory: (state,action) => {
            const category = action.payload;
            if(state.activeCategories.includes(category)){
                state.activeCategories = state.activeCategories.filter((cat) => cat !== category);
            }else{
                state.activeCategories.push(category)
            }
        },
        clearCategory: (state) => {
            state.activeCategories = []
        },
    },
});

export const { toggleCategory, clearCategory } = categorySlice.actions;
export default categorySlice.reducer;