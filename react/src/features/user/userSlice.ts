import { createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "./types";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "Username", id: 1, email: "0000" } as {
    username: string;
    id: number;
    email: string;
  },
  reducers: {
    getUserInfo() {},
    getUserInfoSuccess(state, action: { payload: UserResponse }) {
      if (action.payload) {
        state = Object.assign(state, action.payload);
      }
    },
    getUserInfoFailure(state, action: { payload: string }) {
      console.error(
        "Receiving information about the user has been failed",
        action.payload
      );
    },
  },
});

export const { getUserInfo, getUserInfoFailure, getUserInfoSuccess } =
  userSlice.actions;
export default userSlice.reducer;
