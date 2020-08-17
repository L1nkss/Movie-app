import { useEffect } from "react";
import TMatch from "@constants/types";
import { TFilmDetails } from "@redux/reducers/films/types/types";
import Spinner from "@components/spinner/spinner";

interface IFilmDetailsProps {
  loadDetails: (id: number) => void,
  match: TMatch
  details: TFilmDetails,
  loading: boolean,
  error: boolean,
}
// https://image.tmdb.org/t/p/w342/
const FilmDetails: React.FC<IFilmDetailsProps> = (props: IFilmDetailsProps): JSX.Element => {
  const { id } = props.match.params;
  const { loading, error, details } = props;
  if (details) {
    console.log(details);
  }
  useEffect(() => {
    props.loadDetails(id);
  }, []);
  return (
    <div className="film-details">
      {loading && <Spinner />}
      {details && !loading && (
      <>
        <div className="film-details__poster">
          <img src={`https://image.tmdb.org/t/p/w342/${details.posterPath}`} alt="Изображение" />
        </div>
        <div className="film-details__wrapper">
          <div className="film-details__header">
            <div className="film-details__header-inner">
              <h1 className="film-details__header-text">{details.title}</h1>
              <h3 className="film-details__header-subtext">{details.tagline}</h3>
            </div>
            <p className="film-details__header-information">
              {details.voteAverage}
              {" "}
              /
              {details.runtime !== 0 ? `${details.runtime} min. /` : null }
              {" "}
              2020
            </p>
          </div>
          <div className="film-details__genres">
            <h4>Жанры</h4>
            <ul className="film-details__genres-list">
              <li>comedy</li>
              <li>music</li>
            </ul>
          </div>
          <div className="film-details__description">
            <h4>Описание</h4>
            <p>
              {details.overview}
            </p>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default FilmDetails;
