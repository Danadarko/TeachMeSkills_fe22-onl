import { all } from "redux-saga/effects";
import { sortedPostListSaga } from "./sortedPostListSagas";
import { actions } from "./sortedPostListSlice";
export { default } from "./sortedPostListSlice";

export const { getSortedPosts, getSortedPostsFailure, getSortedPostsSuccess } =
  actions;

export function* sortedPostListSagas() {
  yield all([sortedPostListSaga()]);
}
