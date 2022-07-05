import { all } from "redux-saga/effects";
import { authSagas } from "./features/auth";
import { addPostSagas } from "./features/posts/add-post";
import { logSetState } from "./features/posts/like-dislike/likeDislikeSagas";
import { myPostListSagas } from "./features/posts/my-posts";
import { postListSagas } from "./features/posts/posts-card-list";
import { searchSagas } from "./features/search";
import { userSagas } from "./features/user";

export function* rootSaga() {
  yield all([
    logSetState(),
    authSagas(),
    postListSagas(),
    myPostListSagas(),
    userSagas(),
    searchSagas(),
    addPostSagas(),
  ]);
}
