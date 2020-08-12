import Header from "@components/header/header";
import { useEffect } from "react";
import FilmCard from "@components/film-card/film-card";
import Spinner from "@components/spinner/spinner";
import { TFilm } from "@redux/reducers/films/types/types";

interface IMain {
  films: Array<TFilm>,
  loading: boolean,
  loadFilms: (type: string) => void,
  currentGenre: string
}

const Main: React.FC<IMain> = (props: IMain): JSX.Element => {
  const { loading, films } = props;
  useEffect(() => {
    props.loadFilms(props.currentGenre);
  }, []);

  function createFilmCards() {
    return props.films.map((film: TFilm) => {
      return <FilmCard key={film.id} name={film.title} poster={film.posterPath} />;
    });
  }

  const componentToShow: (Array<JSX.Element> | JSX.Element) = (loading || films.length === 0) ? <Spinner /> : createFilmCards();
  return (
    <div className="main">
      <Header />

      <div className="film-list">
        {componentToShow}
      </div>
    </div>
  );
};

export default Main;
