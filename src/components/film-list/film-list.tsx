import { TFilm } from "@redux/reducers/films/types/types";
import { useEffect } from "react";
import FilmCard from "@components/film-card/film-card";
import Spinner from "@components/spinner/spinner";
import Mistake from "@components/mistake/mistake";
import Header from "@components/header/header.connect";

interface IFilmListProps {
  films: Array<TFilm>,
  loading: boolean,
  loadFilms: (type: string) => void,
  currentGenre: string,
  error: boolean,
}

const FilmList: React.FC<IFilmListProps> = (props: IFilmListProps): JSX.Element => {
  const { loading, error } = props;
  useEffect(() => {
    props.loadFilms(props.currentGenre);
  }, []);

  useEffect(() => {
    props.loadFilms(props.currentGenre);
  }, [props.currentGenre]);

  function createFilmCards() {
    return props.films.map((film: TFilm) => {
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
  return (
    <>
      <Header />
      <div className="film-list">
        {!loading && !error && createFilmCards() }
        {loading && <Spinner />}
        {error && <Mistake />}
      </div>
    </>
  );
};

export default FilmList;
