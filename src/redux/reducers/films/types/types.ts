import { TGenre } from "@redux/reducers/genres/types/types";

type TFilmDetailsState = {
  loading: boolean,
  error: boolean,
  details: null | TFilmDetails,
};

type TFilm = {
  id: number,
  adult: boolean,
  posterPath: string,
  genreIds?: Array<number>,
  title: string,
  voteAverage: number,
  overview: string,
  releaseDate?: string | undefined,
};

type TFilmDetails = TFilm & {
  homepage: string,
  runtime: number,
  tagline: string,
  genres: Array<TGenre>
  voteCount: number
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

type TFilmDetailServer = TServerFilm & {
  homepage: string,
  runtime: number,
  tagline: string,
  genres: Array<TGenre>,
  vote_count: number
};

interface IFilmsState {
  films: Array<TFilm> | [],
  loading: boolean,
  loadingMoreFilms: boolean,
  error: boolean,
  currentPage: number,
  totalPages: number,
  searchString: string | "",
  filmDetails: TFilmDetailsState,
}

export {
  IFilmsState, TFilm, TServerFilm, TFilmDetails, TFilmDetailServer,
};
