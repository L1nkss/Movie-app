import { TFilm } from "@redux/reducers/films/types/types";
import { useEffect } from "react";
import Spinner from "@components/spinner/spinner";
import Mistake from "@components/mistake/mistake";
import Header from "@components/header/header.connect";
import createFilmCards from "@components/film-list/utils/utils";

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

  return (
    <>
      {loading && <Spinner />}
      {error && <Mistake />}
      <Header />
      <div className="film-list">
        {!loading && !error && createFilmCards(props.films) }
      </div>
    </>
  );
};

export default FilmList;
