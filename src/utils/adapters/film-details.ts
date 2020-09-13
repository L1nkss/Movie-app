import { TFilmDetailServer } from "@redux/reducers/films/types/types";
import GenreAdapter from "./genre";

export default class FilmDetailsAdapter {
  static changeValuesToFilmDetails(value: TFilmDetailServer) {
    return {
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
      voteCount: value.vote_count,
      genres: GenreAdapter.addIconField(value.genres),
    };
  }
}
