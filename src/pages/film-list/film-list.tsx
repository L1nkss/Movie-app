import { TFilm } from "@redux/reducers/films/types/types";
import { useEffect } from "react";
import Spinner from "@components/spinner/spinner";
import Mistake from "@components/mistake/mistake";
import Header from "@components/header/header.connect";
import createFilmCards from "@pages/film-list/utils/utils";

interface IFilmListProps {
  films: Array<TFilm>,
  loading: boolean,
  loadFilms: (type: string) => void,
  loadMoreFilms: (type: string, page: number) => void,
  currentGenre: string,
  error: boolean,
  currentPage: number,
  totalPage: number,
  loadingMoreFilms: boolean
}

const FilmList: React.FC<IFilmListProps> = (props: IFilmListProps): JSX.Element => {
  const { loading, error } = props;

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !props.loadingMoreFilms) {
      if (props.currentPage <= props.totalPage) {
        const nextPage = props.currentPage + 1;
        props.loadMoreFilms(props.currentGenre, nextPage);
      }
    }
  };

  // Костыль, чтобы обновлять слушатель на скролле
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props]);

  useEffect(() => {
    props.loadFilms(props.currentGenre);
    // Если изменился жанр, то сбрасываем обработчик, чтобы он не срабатывал при загрузке новых фильмов
    window.removeEventListener("scroll", handleScroll);
  }, [props.currentGenre]);

  return (
    <>
      {loading && <Spinner />}
      {error && <Mistake />}
      <Header />
      <div className="film-list">
        {!loading && createFilmCards(props.films) }
      </div>
      {props.loadingMoreFilms && <Spinner isWrapperFull={false} wrapperClass="ta-c" />}
    </>
  );
};

export default FilmList;
