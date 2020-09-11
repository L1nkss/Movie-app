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
}

const FilmList: React.FC<IFilmListProps> = (props: IFilmListProps): JSX.Element => {
  const { loading, error } = props;

  const loadMoreFilms = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (props.currentPage <= props.totalPage) {
        const nextPage = props.currentPage + 1;
        props.loadMoreFilms(props.currentGenre, nextPage);
      }
    }
  };

  useEffect(() => {
    if (props.films.length === 0) {
      window.removeEventListener("scroll", loadMoreFilms);
      return;
    }
    window.addEventListener("scroll", loadMoreFilms);
  }, [props.films]);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", loadMoreFilms);
    };
  }, []);

  useEffect(() => {
    // window.removeEventListener("scroll", loadMoreFilms);

    // const innerAsyncFunction = async () => {
    //   await props.loadFilms(props.currentGenre);
    //
    //   window.addEventListener("scroll", loadMoreFilms);
    // };

    // innerAsyncFunction();
    props.loadFilms(props.currentGenre);
    //
    // window.addEventListener("scroll", loadMoreFilms);

    // return () => {
    //   window.removeEventListener("scroll", loadMoreFilms);
    // };
  }, [props.currentGenre]);

  // if (loading) {
  //   window.addEventListener("scroll", loadMoreFilms);
  // }
  // console.log("Фильмы которые отрисуем: ", props.films);
  return (
    <>
      {loading && <Spinner />}
      {error && <Mistake />}
      <Header />
      <div className="film-list">
        {!loading && createFilmCards(props.films) }
      </div>
    </>
  );
};

export default FilmList;
