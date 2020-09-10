import { all } from "redux-saga/effects";
import watchGenreSaga from "@redux/reducers/genres/saga/saga";
import { watchFilmDetailsSaga, watchFilmsSaga, watchMoreFilmsSaga } from "@redux/reducers/films/saga/saga";

export default function* rootSaga() {
  yield all([
    watchGenreSaga(),
    watchFilmsSaga(),
    watchMoreFilmsSaga(),
    watchFilmDetailsSaga(),
  ]);
}
