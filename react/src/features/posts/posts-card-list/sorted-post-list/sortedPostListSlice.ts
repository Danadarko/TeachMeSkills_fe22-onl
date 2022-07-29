import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../../types/post";
import { SortEnum } from "../../../pages/all-posts-page/SortEnum";

const sortedPostListSlice = createSlice({
  name: "SortedPostList",
  initialState: {
    sortedPosts: [],
    isFetching: false,
    offset: 0,
    limit: 10,
    isLastPage: false,
  } as {
    sortedPosts: Post[];
    isFetching: boolean;
    offset: number;
    limit: number;
    isLastPage: boolean;
  },
  reducers: {
    fetchNextPage: (state) => {
      if (!state.isLastPage) {
        state.offset = state.offset + state.limit;
      }
    },
    getSortedPosts: (
      state,
      action: { payload: { limit: number; offset: number; text: SortEnum } }
    ) => {
      state.isFetching = true;
      state.limit = 23;
    },
    getSortedPostsSuccess: (
      state,
      action: {
        payload: { sortedPosts: Post[]; offset: number; limit: number };
      }
    ) => {
      state.isLastPage =
        action.payload.sortedPosts.length < action.payload.limit;
      if (action.payload.offset === 0) {
        state.sortedPosts = action.payload.sortedPosts;
      } else {
        state.sortedPosts = [
          ...state.sortedPosts,
          ...action.payload.sortedPosts,
        ];
      }
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
