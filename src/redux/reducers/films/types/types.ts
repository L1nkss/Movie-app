import ActionType from "@redux/reducers/films/constants/constants";

type TFilmRequest = {
  type: string | number
};

// Экшены
export type TFilmsRequest = {
  type: typeof ActionType.GET_FILMS_REQUEST,
  payload?: TFilmRequest
};

export type TFilmsSuccess = {
  type: typeof ActionType.GET_FILM_SUCCESS,
  payload: Array<TFilm>
};

export type TFilmsError = {
  type: typeof ActionType.GET_FILM_ERROR,
  payload?: void
};

type TFilm = {
  id: number,
  adult: boolean,
  posterPath: string,
  genreIds: Array<number>,
  title: string,
  voteAverage: number,
  overview: string,
  releaseDate: string
};

type TServerFilm = {
  genre_ids: Array<number>,
  id: number,
  overview: string,
  title: string,
  adult: boolean,
  poster_path: string,
  original_language: string,
  vote_average: number,
  release_date: string
};

interface IFilmsState {
  films: Array<TFilm> | [],
  loading: boolean,
  error: boolean,
  currentPage: number,
  totalPages: number,
  searchString: string | "",
}

export { IFilmsState, TFilm, TServerFilm };
