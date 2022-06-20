import { all } from "redux-saga/effects";
import {
  activateSaga,
  loginSaga,
  loginSuccesSaga,
  registerSaga,
} from "./authSagas";

export function* authSagas() {
  yield all([registerSaga(), activateSaga(), loginSuccesSaga(), loginSaga()]);
}
