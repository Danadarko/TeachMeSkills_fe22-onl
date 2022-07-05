import { put, call, takeLatest } from "typed-redux-saga";
import { FetchPostsApi } from "./api";
import { actions } from "./postListSlice";

export function* postListSaga() {
  yield takeLatest(actions.getPostsFetch, function* () {
    try {
      const result = yield* call(FetchPostsApi.fetchAllPosts);
      yield* put(actions.getPostsSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.getPostsFailure(e.message));
      }
    }
  });
}
