import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types/post";

const postListSlice = createSlice({
  name: "postList",
  initialState: { posts: [], isLoading: false } as {
    posts: Post[];
    isLoading: boolean;
  },
  reducers: {
    getPostsFetch: (state) => {
      state.isLoading = true;
    },
    getPostsSuccess: (state, action: { payload: Post[] }) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getPostsFailure: (state, action: { payload: string }) => {
      state.isLoading = false;
      console.error("Getting the posts has been failed", action.payload);
    },
  },
});

export const { actions } = postListSlice;
export default postListSlice.reducer;
