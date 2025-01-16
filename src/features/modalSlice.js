// src/features/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: { isOpen: false, plant: null },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.plant = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.plant = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
