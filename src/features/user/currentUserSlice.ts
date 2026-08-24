import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CurrentUserState {
  id: string;
  email: string;
}

const initialState: CurrentUserState = {
  id: "",
  email: "",
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<CurrentUserState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
