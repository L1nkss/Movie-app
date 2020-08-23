import { TServerFilm, TFilmDetailServer } from "@redux/reducers/films/types/types";
import genreAdapter from "@redux/reducers/genres/utils/adapter";

class Adapter {
  static changeKeyName(values: Array<TServerFilm>) {
    return values.map(this.changeValues);
  }

  static changeValues(value: TServerFilm) {
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
  }

  static changeValuesToFilmDetails(value: TFilmDetailServer) {
    return {
      // genreIds: value.genre_ids,
      id: value.id,
      overview: value.overview,
      title: value.title,
      adult: value.adult,
      posterPath: value.poster_path,
      originalLanguage: value.original_language,
      voteAverage: value.vote_average,
      releaseDate: value.release_date,
      homepage: value.homepage,
      runtime: value.runtime,
      tagline: value.tagline,
      // genres: value.genres,
      genres: genreAdapter.addIconField(value.genres),
    };
  }
}

export default Adapter;
