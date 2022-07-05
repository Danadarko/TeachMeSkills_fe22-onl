import { call, put, takeLatest } from "typed-redux-saga";
import { UserApi } from "./api";
import {
  getUserInfo,
  getUserInfoFailure,
  getUserInfoSuccess,
} from "./userSlice";

export function* getUserSaga() {
  yield* takeLatest(getUserInfo, function* () {
    const accessToken = yield* call([localStorage, "getItem"], "access-token"); // localStorage.getItem('access-token')
    if (accessToken) {
      try {
        const response = yield* call(UserApi.getInfo, { accessToken });
        yield* put(getUserInfoSuccess(response));
      } catch (e) {
        if (e instanceof Error) {
          yield* put(getUserInfoFailure(e.message));
        }
      }
    }
  });
}
