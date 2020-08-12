import { TServerFilm } from "@redux/reducers/films/types/types";

class Adapter {
  static changeKeyName(values: Array<TServerFilm>) {
    return values.map((value: TServerFilm) => {
      return {
        genreIds: value.genre_ids,
        id: value.id,
        overview: value.overview,
        title: value.title,
        adult: value.adult,
        posterPath: value.poster_path,
        originalLanguage: value.original_language,
        voteAverage: value.vote_average,
        releaseDate: value.release_date,
      };
    });
  }
}

export default Adapter;
