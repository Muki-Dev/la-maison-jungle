import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null, // Initialement, aucun utilisateur connecté
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload; // Met à jour l'état avec les informations utilisateur
    },
    logout: (state) => {
      state.userInfo = null; // Réinitialise l'utilisateur lors de la déconnexion
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
