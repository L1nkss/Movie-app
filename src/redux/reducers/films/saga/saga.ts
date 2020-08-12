import { put, call, takeEvery } from "redux-saga/effects";
import ActionType from "@redux/reducers/films/constants/constants";
import { getFilmsSuccess, getFilmsError } from "@redux/reducers/films/actions/actions";
import Service from "../../../../api/api";

function* filmsSaga(params: string) {
  try {
    const { type } = params.payload;
    const response = yield call(Service.getFilms, type);
    yield put(getFilmsSuccess(response.data.results));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchFilmsSaga() {
  yield takeEvery(ActionType.GET_FILMS_REQUEST, filmsSaga);
}
