import { actions } from "./postListSlice";
import { all } from "redux-saga/effects";
import { postListSaga, sortedPostListSaga } from "./postListSagas";

export { default } from "./postListSlice";

export const { getPostsFetch, getPostsSuccess, getPostsFailure } = actions;

export function* postListSagas() {
  yield all([postListSaga(), sortedPostListSaga()]);
}
