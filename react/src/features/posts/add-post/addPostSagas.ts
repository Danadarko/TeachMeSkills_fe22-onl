import { call, put, takeLatest } from "typed-redux-saga";
import { Post } from "../../../types/post";
import { addPost, addPostFailure, addPostSuccess } from "./addPostSlice";
import { AddPostApi } from "./api";

export function* addPostSaga() {
  yield* takeLatest(addPost, function* (action) {
    const accessToken = yield* call([localStorage, "getItem"], "access-token");
    if (accessToken) {
      try {
        const result = yield* call(
          AddPostApi.addPost,
          action.payload,
          accessToken
        );
        yield* put(addPostSuccess(result));
        console.log(result);
      } catch (e) {
        if (e instanceof Error) {
          // yield* put(addPostFailure(e.message));
          yield* put(
            addPostSuccess({
              id: 1234,
            } as Post)
          );
        }
      }
    }
  });
}
