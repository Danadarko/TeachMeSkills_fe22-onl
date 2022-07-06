import { postListSagas } from ".";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { FetchPostsApi } from "./api";
import { actions } from "./postListSlice";
import { throwError } from "redux-saga-test-plan/providers";
import { SortEnum } from "../../pages/all-posts-page/SortEnum";

test("success saga flow", () => {
  return expectSaga(postListSagas)
    .provide([[matchers.call.fn(FetchPostsApi.fetchAllPosts), []]])
    .put(actions.getPostsSuccess([]))
    .not.put.like({
      action: { type: actions.getPostsFailure("any string").type },
    })
    .dispatch(actions.getPostsFetch({ limit: 3, offset: 3 }))
    .run();
});

test("failure saga flow", () => {
  return expectSaga(postListSagas)
    .provide([
      [
        matchers.call.fn(FetchPostsApi.fetchAllPosts),
        throwError(new Error("Failure")),
      ],
    ])
    .put(actions.getPostsFailure("Failure"))
    .not.put.like({
      action: { type: actions.getPostsSuccess([]).type },
    })
    .dispatch(actions.getPostsFetch({ limit: 3, offset: 3 }))
    .run();
});
