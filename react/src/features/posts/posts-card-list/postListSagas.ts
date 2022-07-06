import { put, call, takeLatest } from "typed-redux-saga";
import { FetchPostsApi } from "./api";
import { actions } from "./postListSlice";

export function* postListSaga() {
  yield takeLatest(actions.getPostsFetch, function* (action) {
    try {
      const result = yield* call(FetchPostsApi.fetchAllPosts, action.payload);
      yield* put(actions.getPostsSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.getPostsFailure(e.message));
      }
    }
  });
}
export function* sortedPostListSaga() {
  yield takeLatest(actions.getSortedPosts, function* (action) {
    try {
      const result = yield* call(FetchPostsApi.fetchAllPosts, action.payload);
      yield* put(actions.getSortedPostsSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.getSortedPostsFailure(e.message));
      }
    }
  });
}
