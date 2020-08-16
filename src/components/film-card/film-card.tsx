import { Link } from "react-router-dom";
import { RoutePathes } from "@constants/contants";
import getRatingClass from "../../utils/utils";
import history from "../../utils/history";

interface IFilmCard {
  poster: string,
  vote: number,
  id: number
}

const FilmCard: React.FC<IFilmCard> = (props: IFilmCard): JSX.Element => {
  const { vote } = props;
  const voteRating = getRatingClass(vote);
  return (
    <Link to={`${RoutePathes.FILM_DETAILS}/${props.id}`}>
      <div className="film-card">
        <img className="film-card__image" src={`https://image.tmdb.org/t/p/w342/${props.poster}`} alt="Изображение" />
        {vote !== 0 && <span className={`film-card__rating ${voteRating}`}>{vote}</span>}
      </div>
    </Link>
  );
};

export default FilmCard;
