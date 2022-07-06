import { actions } from "./postListSlice";
import { all } from "redux-saga/effects";
import { postListSaga } from "./postListSagas";

export { default } from "./postListSlice";

export const { getPostsFetch, getPostsSuccess, getPostsFailure } = actions;

export function* postListSagas() {
  yield all([postListSaga()]);
}
