import { all } from "redux-saga/effects";
import watchGenreSaga from "@redux/reducers/genres/saga/saga";
import { watchFilmDetailsSaga, watchMoreFilmsSaga, watchFilmsSaga } from "@redux/reducers/films/saga/saga";

export default function* rootSaga() {
  yield all([
    watchGenreSaga(),
    watchFilmsSaga(),
    watchMoreFilmsSaga(),
    watchFilmDetailsSaga(),
  ]);
}
