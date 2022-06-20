import { put, call, takeLatest } from "typed-redux-saga";
import {
  getPostsFailure,
  getPostsFetch,
  getPostsSuccess,
} from "./postListSlice";

export function* postListSaga() {
  yield takeLatest(getPostsFetch, function* () {
    try {
      const posts = yield* call(() =>
        fetch("https://studapi.teachmeskills.by/blog/posts/?limit=10")
      );
      const { results } = yield posts.json();
      yield* put(getPostsSuccess(results));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getPostsFailure(e.message));
      }
    }
  });
}
