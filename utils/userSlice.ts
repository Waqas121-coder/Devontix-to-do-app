import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  email: string | null;
}

const initialState: UserState = {
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    logoutUser(state) {
      state.email = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.email;

export default userSlice.reducer;
