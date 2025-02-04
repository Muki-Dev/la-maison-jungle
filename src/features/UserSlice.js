import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Bams Muki",
  email: "bamsmuki@example.com",
  profilePicture: "https://via.placeholder.com/150",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    editProfile: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.profilePicture = "";
    },
  },
});

export const { editProfile, logout } = userSlice.actions;
export default userSlice.reducer;
