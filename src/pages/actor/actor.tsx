import Spinner from "@components/spinner/spinner";
import { useEffect, useState } from "react";
import Adapter from "@redux/reducers/films/utils/adapter";
import { TFilm } from "@redux/reducers/films/types/types";
import createFilmCards from "@components/film-list/utils/utils";
import moment from "moment";
import Service from "../../api/api";
import CastAdapter from "../../utils/cast-adapter";
import history from "../../utils/history";
import ActorAdapter from "../../utils/actor-adapter";

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
  const [details, setDetails] = useState<IActorState>({});
  const [isDataLoaded, setDataLoadedStatus] = useState(false);

  const calculateAge = (date) => {
    const dateNow = moment();
    const test = moment(date, "YYYY");
    return dateNow.diff(test, "years");
  };

  useEffect(() => {
    // Вн. асинх. функция, нужна, чтобы стейт не изменялся раньше, чем придут данные с сервера
    const innerAsyncFunction = async () => {
      setLoading(true);

      await Service.getPersonDetails(id)
        .then((body) => {
          setDetails(((prevState) => ({ ...prevState, ...ActorAdapter.adaptValues(body.data) })));
          // setDetails(ActorAdapter.adaptValues(body.data));
        });

      await Service.discover({ with_cast: id, sort_by: "release_date.desc" })
        .then((body) => {
          setDetails(((prevState) => ({ ...prevState, films: Adapter.changeKeyName(body.data.results) })));
        });

      setLoading(false);
      setDataLoadedStatus(true);
    };

    innerAsyncFunction();
  }, []);
  // https://image.tmdb.org/t/p/w342/
  return (
    <>
      {isPersonDetailsLoading && <Spinner />}
      {!isPersonDetailsLoading && isDataLoaded
      && (
      <>
        <div className="actor-details">
          <img src={`https://image.tmdb.org/t/p/w342/${details.profilePath}`} alt="" />
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
                {` (${calculateAge(details.deathDay)})`}
              </p>
            </div>
            )}

            <div>
              <h3>Биография</h3>
              <p>{details.biography}</p>
            </div>
          </div>
        </div>
        <div className="film-list film-list--small">
          {createFilmCards(details.films)}
        </div>
      </>
      )}
    </>
  );
};

export default Actor;
