import { TFilmNavigation } from "@constants/types/types";

// Экшен
export type TGenreRequest = {
  type: "GET_GENRES_REQUEST"
};

export type TGenreSuccess = {
  type: "GET_GENRES_SUCCESS", payload: Array<TGenre>
};

export type TGenreError = {
  type: "GET_GENRES_ERROR", payload: string
};

export type TChangeGenre = {
  type: "CHANGE_ACTIVE_GENRE", payload: string
};

type GenreAction =
  | TGenreRequest
  | TGenreSuccess
  | TGenreError
  | TChangeGenre;

type TGenre = {
  id: number,
  name: string
};

interface IInitialState {
  genres: Array<TGenre> | [],
  filmGenres: Array<TFilmNavigation>,
  active: string,
  loading: boolean,
  error: boolean
}

export { IInitialState, GenreAction, TGenre };
