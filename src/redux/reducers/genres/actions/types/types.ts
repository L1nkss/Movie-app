import ActionType from "@redux/reducers/genres/constants/constants";
import { TGenre } from "@redux/reducers/genres/types/types";

export type TGetGenresRequest = {
  type: typeof ActionType.GET_GENRES_REQUEST,
  payload?: void
};

export type TGetGenresSuccess = {
  type: typeof ActionType.GET_GENRES_SUCCESS,
  payload: Array<TGenre>
};

export type TGetGenresError = {
  type: typeof ActionType.GET_GENRES_ERROR,
  payload?: void
};

export type TChangeActiveGenre = {
  type: typeof ActionType.CHANGE_ACTIVE_GENRE,
  payload: string
};
