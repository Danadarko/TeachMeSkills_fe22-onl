import { put, call, takeLatest } from "typed-redux-saga";
import { FetchMyPostsApi } from "./api";
import { actions } from "./myPostListSlice";

export function* myPostListSaga() {
  yield takeLatest(actions.getMyPostsFetch, function* () {
    try {
      const result = yield* call(FetchMyPostsApi.fetchMyPosts);
      yield* put(actions.getMyPostsSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.getMyPostsFailure(e.message));
      }
    }
  });
}
