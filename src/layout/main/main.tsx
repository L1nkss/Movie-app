import Header from "@components/header/header.connect";
import { useEffect } from "react";
import FilmCard from "@components/film-card/film-card";
import Spinner from "@components/spinner/spinner";
import { TFilm } from "@redux/reducers/films/types/types";
import Mistake from "@components/mistake/mistake";

interface IMain {
  films: Array<TFilm>,
  loading: boolean,
  loadFilms: (type: string) => void,
  currentGenre: string,
  error: boolean,
}

const Main: React.FC<IMain> = (props: IMain): JSX.Element => {
  console.log(props);
  const { loading, error } = props;
  useEffect(() => {
    props.loadFilms(props.currentGenre);
  }, []);

  function createFilmCards() {
    return props.films.map((film: TFilm) => {
      return (
        <FilmCard
          key={film.id}
          poster={film.posterPath}
          vote={film.voteAverage}
        />
      );
    });
  }

  return (
    <div className="main">
      <Header />

      <div className="film-list">
        {loading && <Spinner />}
        {!loading && createFilmCards()}
        {error && <Mistake />}
      </div>
    </div>
  );
};

export default Main;
