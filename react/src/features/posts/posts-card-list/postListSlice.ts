import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types/post";

const postListSlice = createSlice({
  name: "postList",
  initialState: {
    posts: [],
    isFetching: true,
    offset: 0,
    limit: 10,
  } as {
    posts: Post[];
    isFetching: boolean;
    offset: number;
    limit: number;
  },
  reducers: {
    getPostsFetch: (
      state,
      action: { payload: { limit: number; offset: number } }
    ) => {
      state.isFetching = true;
    },
    getPostsSuccess: (state, action: { payload: Post[] }) => {
      state.posts = action.payload;
      state.limit += 0;
      state.isFetching = false;
    },
    getPostUpdate: (state, action: { payload: { isFetching: boolean } }) => {
      state.isFetching = true;
    },
    getPostsFailure: (state, action: { payload: string }) => {
      state.isFetching = false;
      console.error(
        "The receiving of the posts has been failed",
        action.payload
      );
    },
  },
});

export const { actions } = postListSlice;
export default postListSlice.reducer;
