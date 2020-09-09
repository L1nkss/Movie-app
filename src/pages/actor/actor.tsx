import Spinner from "@components/spinner/spinner";
import { useEffect, useState } from "react";
import { TFilm } from "@redux/reducers/films/types/types";
import createFilmCards from "@components/film-list/utils/utils";
import moment from "moment";
import FilmAdapter from "../../utils/adapters/film";
import Service from "../../api/api";
import ActorAdapter from "../../utils/adapters/actor";
import { calculateAge } from "../../utils/utils";

interface IActorState {
  films?: Array<TFilm>,
  biography: string,
  birthday: string,
  deathDay: string,
  name: string,
  placeOfBirth: string,
  profilePath: string
}

// todo исправить
const Actor: React.FC<any> = (props: any): JSX.Element => {
  const { id } = props.match.params;
  const [isPersonDetailsLoading, setLoading] = useState(false);
  const [details, setDetails] = useState<IActorState>();
  const [isDataLoaded, setDataLoadedStatus] = useState(false);

  const compareFilmsByDate = (first: TFilm, second: TFilm): number => {
    const firstDate = first.releaseDate ? first.releaseDate : first.firstAirDate;
    const secondDate = second.releaseDate ? second.releaseDate : second.firstAirDate;

    return new Date(secondDate).getTime() - new Date(firstDate).getTime();
  };

  useEffect(() => {
    // Вн. асинх. функция, нужна, чтобы стейт не изменялся раньше, чем придут данные с сервера
    const innerAsyncFunction = async () => {
      setLoading(true);

      await Service.getPersonDetails(id)
        .then((body) => {
          setDetails(((prevState) => ({ ...prevState, ...ActorAdapter.adaptValues(body.data) })));
        });

      await Service.getCombine(id)
        .then((body) => {
          return FilmAdapter.changeKeyName(body.data.cast);
        })
        .then((films) => {
          const filteredFilm = films.sort(compareFilmsByDate);
          setDetails(((prevState) => ({ ...prevState, films: filteredFilm })));
        });

      setLoading(false);
      setDataLoadedStatus(true);
    };

    try {
      innerAsyncFunction();
    } catch (e) {
      throw new Error();
    }
  }, []);

  return (
    <>
      {isPersonDetailsLoading && <Spinner />}
      {!isPersonDetailsLoading && isDataLoaded
      && (
      <>
        <div className="actor-details">
          <img className="actor-details__image" src={`https://image.tmdb.org/t/p/w342/${details.profilePath}`} alt="" />
          <div className="actor-details__information">
            <h2 className="actor-details__name">{details.name}</h2>

            <div>
              <h3>Дата рождения</h3>
              <p>
                {moment(details.birthday).format("DD MMMM YYYY") }
                {details.deathDay ? null : ` (${calculateAge(details.birthday)})`}
              </p>
            </div>

            {details.deathDay
            && (
            <div>
              <h3>Дата смерти</h3>
              <p>
                {moment(details.deathDay).format("DD MMMM YYYY") }
                {` (${calculateAge(details.birthday, details.deathDay, false)})`}
              </p>
            </div>
            )}

            <div>
              <h3>Биография</h3>
              <p>{details.biography}</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Фильмография: </h2>
          <div className="film-list film-list--small">
            {createFilmCards(details.films)}
          </div>
        </div>
      </>
      )}
    </>
  );
};

export default Actor;
