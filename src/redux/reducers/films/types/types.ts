type TFilm = {
  id: number,
  adult: boolean,
  posterPath: string,
  originalTitle: string,
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
  error: boolean
}

export { IFilmsState, TFilm, TServerFilm };
