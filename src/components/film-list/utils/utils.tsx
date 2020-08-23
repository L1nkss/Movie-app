import { TFilm } from "@redux/reducers/films/types/types";
import FilmCard from "@components/film-card/film-card";

function createFilmCards(films: Array<TFilm>) {
  return films.map((film: TFilm) => {
    return (
      <FilmCard
        key={film.id}
        poster={film.posterPath}
        vote={film.voteAverage}
        id={film.id}
      />
    );
  });
}

export default createFilmCards;
