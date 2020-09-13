import { TFilm } from "@redux/reducers/films/types/types";
import FilmCard from "@components/film-card/film-card";

function createFilmCards(films: Array<TFilm>): Array<JSX.Element> {
  return films.map((film: TFilm) => {
    let filmCardProps = {};

    if (!film.posterPath) {
      filmCardProps = {
        name: film.title,
      };
    }

    return (
      <FilmCard
        key={film.id}
        poster={film.posterPath}
        vote={film.voteAverage}
        id={film.id}
        {...filmCardProps}
      />
    );
  });
}

export default createFilmCards;
