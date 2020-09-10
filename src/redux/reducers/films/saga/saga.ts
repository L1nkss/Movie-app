import { put, call, takeEvery } from "redux-saga/effects";
import ActionType from "@redux/reducers/films/constants/constants";
import {
  getFilmsSuccess, getFilmsError, getCurrentPage, getMoreFilmsSuccess, getFilmDetailsSuccess, getFilmDetailsError,
} from "@redux/reducers/films/actions/actions";
import Service from "../../../../api/api";

type TParamsPayload = {
  type: string | number
};

interface TParams {
  payload: TParamsPayload,
  type: string
}

function* filmsMoreSaga({ payload }: any) {
  console.log(payload);
  try {
    const response = typeof payload.type === "string"
      ? yield call(Service.getFilms, payload.type, payload.page)
      : yield call(Service.discover, { with_genre: payload.type, page: payload.page });

    console.log(response);
    yield put(getCurrentPage(response.data.page));
    yield put(getMoreFilmsSuccess(response.data.results));
    // const response = yield call(Service.discoverMovieByGenre, page);
    // yield put(getMoreFilmsSuccess(response.data.results));
  } catch (e) {
    yield put(getFilmsError());
  }
}

function* filmsSaga(params: TParams) {
  try {
    const { type } = params.payload;
    // изменить апи на нормальный discover
    const response = typeof type === "string" ? yield call(Service.getFilms, type) : yield call(Service.discoverMovieByGenre, type);
    yield put(getCurrentPage(response.data.page));
    yield put(getFilmsSuccess(response.data.results, response.data.total_pages));
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
