import getRatingClass from "../../utils/utils";

interface IFilmCard {
  poster: string,
  vote: number
}

const FilmCard: React.FC<IFilmCard> = (props: IFilmCard): JSX.Element => {
  const { vote } = props;
  const voteRating = getRatingClass(vote);
  return (
    <a href="https://">
      <div className="film-card">
        <img className="film-card__image" src={`https://image.tmdb.org/t/p/w342/${props.poster}`} alt="Изображение" />
        {vote !== 0 && <span className={`film-card__rating ${voteRating}`}>{vote}</span>}
      </div>
    </a>
  );
};

export default FilmCard;
