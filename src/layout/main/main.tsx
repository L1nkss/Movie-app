import Header from "@components/header/header";
import { useEffect } from "react";
import FilmCard from "@components/film-card/film-card";

import Spinner from "@components/spinner/spinner";

const Main: React.FC = (props: any): JSX.Element => {
  const { loading, error, films } = props;
  useEffect(() => {
    props.loadFilms("popular");
  }, []);

  function createFilmCards(films) {
    return films.map((film) => {
      return <FilmCard key={film.id} name={film.title} poster={film.posterPath} />;
    });
  }

  const componentToShow = (loading || films.length === 0) ? <Spinner /> : createFilmCards(films);
  return (
    <div className="main">
      <Header />

      <div className="film-list">
        {/*{componentToShow}*/}
      </div>
    </div>
  );
};

export default Main;
