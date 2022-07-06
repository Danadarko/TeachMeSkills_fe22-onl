import { put, call, takeLatest } from "typed-redux-saga";
import { FetchSortedPostsApi } from "./api";
import { actions } from "./sortedPostListSlice";

export function* sortedPostListSaga() {
  yield takeLatest(actions.getSortedPosts, function* (action) {
    try {
      const result = yield* call(
        FetchSortedPostsApi.fetchSortedPosts,
        action.payload
      );
      yield* put(actions.getSortedPostsSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.getSortedPostsFailure(e.message));
      }
    }
  });
}
