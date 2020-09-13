import { Link } from "react-router-dom";
import { RoutePathes, imageUrl } from "@constants/contants";
import { getRatingClass } from "../../utils/utils";

interface IFilmCard {
  poster: string,
  vote: number,
  id: number,
  name?: string
}

const FilmCard: React.FC<IFilmCard> = (props: IFilmCard): JSX.Element => {
  const { vote } = props;
  const voteRating = getRatingClass(vote);

  return (
    <Link to={`${RoutePathes.FILM_DETAILS}/${props.id}`}>
      <div className="film-card">
        {props.poster
          ? <img className="film-card__image" src={`${imageUrl}${props.poster}`} alt="Изображение фильма" />
          : <div className="film-card__no-image">{props.name}</div>}
        {vote !== 0 && <span className={`film-card__rating ${voteRating}`}>{vote}</span>}
      </div>
    </Link>
  );
};

FilmCard.defaultProps = {
  name: "",
};

export default FilmCard;
