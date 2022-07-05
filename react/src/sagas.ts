import { all } from "redux-saga/effects";
import { authSagas } from "./features/auth";
import { logSetState } from "./features/posts/like-dislike/likeDislikeSagas";
import { postListSaga } from "./features/posts/posts-card-list/postListSaga";
import { userSagas } from "./features/user";

export function* rootSaga() {
  yield all([logSetState(), authSagas(), postListSaga(), userSagas()]);
}
