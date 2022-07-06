import { addPostSaga } from "./addPostSagas";
import { all } from "redux-saga/effects";
export { Form as AddPostForm } from "./ui/Form";
export { default } from "./addPostSlice";

export function* addPostSagas() {
  yield all([addPostSaga()]);
}
