import { useEffect, useState } from "react";
import TMatch from "@constants/types";
import { TFilmDetails } from "@redux/reducers/films/types/types";
import Spinner from "@components/spinner/spinner";
import MenuList from "@components/menu-list/menu-list.connect";
import createFilmCards from "@components/film-list/utils/utils";
import Rating from "@components/rating/rating";
import Cast from "@components/cast/cast";
import FilmAdapter from "../../utils/adapters/film";
import history from "../../utils/history";
import Service from "../../api/api";
import CastAdapter from "../../utils/adapters/cast";
import Mistake from "@components/mistake/mistake";

interface IFilmDetailsProps {
  loadDetails: (id: number) => void,
  match: TMatch
  details: TFilmDetails,
  loading: boolean,
  error: boolean,
}

const FilmDetails: React.FC<IFilmDetailsProps> = (props: IFilmDetailsProps): JSX.Element => {
  const [filmsRecommendations, setFilms] = useState([]);
  const [isRecommendationsLoading, setRecommendationLoader] = useState(false);
  const [isCastLoading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const { id } = props.match.params;
  const { loading, error, details } = props;

  const getFilmRecommendations = React.useCallback(() => {
    setRecommendationLoader(true);
    // Получаем список рекомендаций
    Service.getRecommendations(id)
      .then((body) => {
        const films = FilmAdapter.changeKeyName(body.data.results.slice(0, 12));
        setFilms(films);
        setRecommendationLoader(false);
      });
  }, [id]);

  const getFilmCast = React.useCallback(() => {
    setLoading(true);

    Service.getFilmCast(id)
      .then((body) => {
        setCast(CastAdapter.adaptValues(body.data.cast));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  // Загружаем новые данные, если обновился ID фильма
  useEffect((): void => {
    props.loadDetails(id);

    // Получаем список рекомандаций к фильму
    getFilmRecommendations();

    // Загружаем актерский состав
    getFilmCast();
  }, [id]);

  const isContentLoading = loading || isCastLoading;
  return (
    <>
      {error && <Mistake />}
      {isContentLoading && <Spinner />}
      {details && !isContentLoading && (
        <>
          <div className="film-details">
            <>
              <div className={`${details.posterPath ? "" : "film-details__poster"}`}>
                {details.posterPath
                  ? <img src={`https://image.tmdb.org/t/p/w342/${details.posterPath}`} alt="Изображение" />
                  : <>No poster :(</>}
              </div>
              <div className="film-details__wrapper">
                <div className="film-details__header">
                  <div className="film-details__header-inner">
                    <div>
                      <h1 className="film-details__header-text">{details.title}</h1>
                      <p className="film-details__header-information">
                        {details.runtime !== 0 ? `${details.runtime} min. /` : null }
                        {" "}
                        {new Date(props.details.releaseDate).getFullYear()}
                      </p>
                    </div>
                    <Rating
                      containerClass="film-details__rating"
                      voteAverage={details.voteAverage}
                      voteCount={details.voteCount}
                    />
                  </div>
                  <h2 className="film-details__header-subtext">{details.tagline}</h2>
                </div>
                <div className="film-details__genres">
                  <h3>Жанры</h3>
                  <MenuList items={details.genres} noActive />
                </div>
                <div className="film-details__description">
                  <h3>Описание</h3>
                  <p>
                    {details.overview}
                  </p>
                </div>
                <div className="film-details__description">
                  <h3>В ролях: </h3>
                  <Cast cast={cast} itemsToShow={6} id={id} />
                </div>
                <div>
                  <button className="film-details__button" type="button" onClick={() => { history.goBack(); }}>Назад</button>
                </div>
              </div>
            </>
          </div>
          <div>
            <h2>Возможно вам понравится: </h2>
            <div className="film-list film-list--small">
              {isRecommendationsLoading && <Spinner />}
              {!isRecommendationsLoading && createFilmCards(filmsRecommendations)}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FilmDetails;
