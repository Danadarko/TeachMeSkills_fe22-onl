import { actions } from "./myPostListSlice";
import { all } from "redux-saga/effects";
import { myPostListSaga } from "./myPostListSagas";

export { default } from "./myPostListSlice";

export const { getMyPostsFetch, getMyPostsSuccess, getMyPostsFailure } =
  actions;

export function* myPostListSagas() {
  yield all([myPostListSaga()]);
}
