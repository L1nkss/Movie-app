import { put, call, takeEvery } from "redux-saga/effects";
import ActionType from "@redux/reducers/films/constants/constants";
import { getFilmsSuccess, getFilmsError } from "@redux/reducers/films/actions/actions";
import Service from "../../../../api/api";

type TParamsPayload = {
  type: string | number
};

interface TParams {
  payload: TParamsPayload,
  type: string
}

function* filmsSaga(params: TParams) {
  try {
    const { type } = params.payload;
    let response;
    if (typeof type === "string") {
      response = yield call(Service.getFilms, type);
    }

    if (typeof type === "number") {
      response = yield call(Service.discoverMovieByGenre, type);
    }
    yield put(getFilmsSuccess(response.data.results));
  } catch (e) {
    throw new Error("Ошибка при получении списка фильмов");
  }
}

export default function* watchFilmsSaga() {
  yield takeEvery(ActionType.GET_FILMS_REQUEST, filmsSaga);
}
