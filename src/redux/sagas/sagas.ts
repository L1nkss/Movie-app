import { all } from "redux-saga/effects";
import watchGenreSaga from "@redux/reducers/genres/saga/saga";

export default function* rootSaga() {
  yield all([
    watchGenreSaga(),
  ]);
}
