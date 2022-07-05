import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types/post";

const myPostListSlice = createSlice({
  name: "myPostList",
  initialState: { myPosts: [], isLoading: false } as {
    myPosts: Post[];
    isLoading: boolean;
  },
  reducers: {
    getMyPostsFetch: (state) => {
      state.isLoading = true;
    },
    getMyPostsSuccess: (state, action: { payload: Post[] }) => {
      state.myPosts = action.payload;
      state.isLoading = false;
    },
    getMyPostsFailure: (state, action: { payload: string }) => {
      state.isLoading = false;
      console.error("Getting the posts has been failed", action.payload);
    },
  },
});

export const { actions } = myPostListSlice;
export default myPostListSlice.reducer;
