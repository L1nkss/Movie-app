import ActionType from "@redux/reducers/genres/constants/constants";

// Экшены
// export type TGenreRequest = {
//   type: typeof ActionType.GET_GENRES_REQUEST,
//   payload?: void
// };
//
// export type TGenreSuccess = {
//   type: typeof ActionType.GET_GENRES_SUCCESS,
//   payload: Array<TGenre>
// };
//
// export type TGenreError = {
//   type: typeof ActionType.GET_GENRES_ERROR,
//   payload?: any
// };
//
// export type TChangeGenre = {
//   type: typeof ActionType.CHANGE_ACTIVE_GENRE,
//   payload: string
// };

// type GenreActionTypes =
//   | TGenreRequest
//   | TGenreSuccess
//   | TGenreError
//   | TChangeGenre;

type TGenre = {
  id?: number,
  name: string
  icon: string
  label?: string
};

export type TServerGenre = {
  id: number,
  name: string
};

interface IGenreState {
  genres: Array<TGenre> | [],
  filmGenres: Array<TGenre>,
  active: string,
  loading: boolean,
  error: boolean
}

export { IGenreState, TGenre };
