import { put, call, takeEvery } from "redux-saga/effects";
import ActionType from "@redux/reducers/genres/constants/constants";
import { getGenresSuccess, getGenresError } from "@redux/reducers/genres/actions/actions";
import Service from "../../../../api/api";

function* genreSaga() {
  try {
    const response = yield call(Service.getGenres);
    yield put(getGenresSuccess(response.data.genres));
  } catch (e) {
    console.log(e);
    yield put(getGenresError());
  }
}

export default function* watchGenreSaga() {
  yield takeEvery(ActionType.GET_GENRES_REQUEST, genreSaga);
}
