import { TFilmNavigation } from "@constants/types/types";
import ActionType from "@redux/reducers/genres/constants/constants";

// Экшен
export type TGenreRequest = {
  type: typeof ActionType.GET_GENRES_REQUEST,
  payload?: any
};

export type TGenreSuccess = {
  type: typeof ActionType.GET_GENRES_SUCCESS,
  payload: Array<TGenre>
};

export type TGenreError = {
  type: typeof ActionType.GET_GENRES_ERROR,
  payload?: any
};

export type TChangeGenre = {
  type: typeof ActionType.CHANGE_ACTIVE_GENRE,
  payload: string
};

type GenreActionTypes =
  | TGenreRequest
  | TGenreSuccess
  | TGenreError
  | TChangeGenre;

type TGenre = {
  id: number,
  name: string
  icon: string
};

interface IGenreState {
  genres: Array<TGenre> | [],
  filmGenres: Array<TFilmNavigation>,
  active: string,
  loading: boolean,
  error: boolean
}

export { IGenreState, GenreActionTypes, TGenre };
