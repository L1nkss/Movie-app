import { put, call, takeEvery } from "redux-saga/effects";
import ActionType from "@redux/reducers/genres/constants/constants";
import { getGenresSuccess, getGenresError } from "@redux/reducers/genres/actions/actions";
import { RoutePathes } from "@constants/contants";
import { getCurrentPage } from "@redux/reducers/films/actions/actions";
import Service from "../../../../api/api";
import history from "../../../../utils/history";

function* genreSaga() {
  try {
    const response = yield call(Service.getGenres);
    yield put(getGenresSuccess(response.data.genres));
    yield put(getCurrentPage(1));
  } catch (e) {
    yield put(getGenresError());
  }
}

export default function* watchGenreSaga() {
  yield takeEvery(ActionType.GET_GENRES_REQUEST, genreSaga);
}
