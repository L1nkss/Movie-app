import ActionType from "@redux/reducers/genres/constants/constants";
import { TGenre, GenreActionTypes } from "@redux/reducers/genres/types/types";
import Adapter from "@redux/reducers/genres/utils/adapter";

const getGenresRequest = (): GenreActionTypes => ({ type: ActionType.GET_GENRES_REQUEST });

const getGenresSuccess = (genres: Array<TGenre>): GenreActionTypes => ({
  type: ActionType.GET_GENRES_SUCCESS,
  payload: Adapter.addIconField(genres),
});

const getGenresError = (): GenreActionTypes => ({ type: ActionType.GET_GENRES_ERROR });

const changeActiveGenre = (active: string): GenreActionTypes => ({ type: ActionType.CHANGE_ACTIVE_GENRE, payload: active });

export {
  getGenresRequest,
  getGenresSuccess,
  getGenresError,
  changeActiveGenre,
};
