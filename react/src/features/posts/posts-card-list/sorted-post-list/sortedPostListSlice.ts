import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../../types/post";
import { SortEnum } from "../../../pages/all-posts-page/SortEnum";

const sortedPostListSlice = createSlice({
  name: "SortedPostList",
  initialState: {
    sortedPosts: [],
    isFetching: true,
    offset: 0,
    limit: 10,
  } as {
    sortedPosts: Post[];
    isFetching: boolean;
    offset: number;
    limit: number;
  },
  reducers: {
    getPostUpdate: (state, action: { payload: { isFetching: boolean } }) => {
      state.isFetching = true;
    },
    getSortedPosts: (
      state,
      action: { payload: { limit: number; offset: number; text: SortEnum } }
    ) => {
      state.isFetching = true;
    },
    getSortedPostsSuccess: (state, action: { payload: Post[] }) => {
      state.sortedPosts = action.payload;
      state.limit += 0;
      state.isFetching = false;
    },
    getSortedPostsFailure: (state, action: { payload: string }) => {
      console.error(
        "The receiving of the posts has been failed",
        action.payload
      );
    },
  },
});

export const { actions } = sortedPostListSlice;
export default sortedPostListSlice.reducer;
