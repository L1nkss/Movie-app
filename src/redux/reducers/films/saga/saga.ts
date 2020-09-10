import { put, call, takeEvery } from "redux-saga/effects";
import ActionType from "@redux/reducers/films/constants/constants";
import {
  getFilmsSuccess, getFilmsError, getMoreFilmsSuccess, getCurrentPage, getFilmDetailsSuccess, getFilmDetailsError
} from "@redux/reducers/films/actions/actions";
import Service from "../../../../api/api";

type TParamsPayload = {
  type: string | number
};

interface TParams {
  payload: TParamsPayload,
  type: string
}

function* filmsMoreSaga(page: any) {
  try {
    const response = yield call(Service.discoverMovieByGenre, page);
    yield put(getMoreFilmsSuccess(response.data.results));
  } catch (e) {
    yield put(getFilmsError());
  }
}

function* filmsSaga(params: TParams) {
  try {
    const { type } = params.payload;
    let response;
    if (typeof type === "string") {
      response = yield call(Service.getFilms, type);
      yield put(getCurrentPage(response.data.page));
    }

    if (typeof type === "number") {
      response = yield call(Service.discoverMovieByGenre, type);
    }
    yield put(getFilmsSuccess(response.data.results));
  } catch (e) {
    yield put(getFilmsError());
    throw new Error("Ошибка при получении списка фильмов");
  }
}

function* getFilmDetailsSaga(params: any) {
  try {
    const response = yield call(Service.getFilmDetails, Number(params.payload));
    yield put(getFilmDetailsSuccess(response.data));
  } catch (e) {
    yield put(getFilmDetailsError());
    throw new Error("Ошибка при получении информации о фильме");
  }
}

export function* watchFilmsSaga() {
  yield takeEvery(ActionType.GET_FILMS_REQUEST, filmsSaga);
}

export function* watchMoreFilmsSaga() {
  yield takeEvery(ActionType.GET_MORE_FILM_REQUEST, filmsMoreSaga);
}

export function* watchFilmDetailsSaga() {
  yield takeEvery(ActionType.GET_FILM_DETAILS_REQUEST, getFilmDetailsSaga);
}
