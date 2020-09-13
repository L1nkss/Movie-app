import ActionType from "@redux/reducers/genres/constants/constants";
import { TServerGenre } from "@redux/reducers/genres/types/types";
import {
  TChangeActiveGenre,
  TGetGenresError,
  TGetGenresRequest,
  TGetGenresSuccess,
} from "@redux/reducers/genres/actions/types/types";
import GenreAdapter from "../../../../utils/adapters/genre";

const getGenresRequest = (): TGetGenresRequest => ({ type: ActionType.GET_GENRES_REQUEST });

const getGenresSuccess = (genres: Array<TServerGenre>): TGetGenresSuccess => ({
  type: ActionType.GET_GENRES_SUCCESS,
  payload: GenreAdapter.addIconField(genres),
});

const getGenresError = (): TGetGenresError => ({ type: ActionType.GET_GENRES_ERROR });

const changeActiveGenre = (active: string): TChangeActiveGenre => ({ type: ActionType.CHANGE_ACTIVE_GENRE, payload: active });

export {
  getGenresRequest,
  getGenresSuccess,
  getGenresError,
  changeActiveGenre,
};
