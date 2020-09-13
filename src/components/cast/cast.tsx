import { TCast } from "@constants/types";
import { Link } from "react-router-dom";
import { RoutePathes, imageUrl } from "@constants/contants";

interface ICast{
  cast: Array<TCast>,
  itemsToShow: number | "all",
  id?: number
}

const Cast: React.FC<ICast> = (props: ICast): JSX.Element => {
  let castToShow;

  // В завимимости от пропса, показываем либо всех актеров, либо определенное количество
  if (typeof props.itemsToShow === "number") {
    castToShow = props.cast.slice(0, props.itemsToShow);
  }

  if (typeof props.itemsToShow === "string") {
    castToShow = props.cast;
  }

  return (
    <>
      <ul className="cast">
        {castToShow.map((element) => {
          return (
            <li className="cast__item" key={element.id}>
              <Link to={`${RoutePathes.ACTOR}/${element.id}`} className="cast__actor">
                <img className="cast__image" src={`${imageUrl}${element.profilePath}`} alt="" />
              </Link>
              <div className="cast__wrapper">
                <p>
                  <Link to={`${RoutePathes.ACTOR}/${element.id}`} className="cast__name">{element.name}</Link>
                </p>
                <p>{element.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {props.itemsToShow !== "all"
      && (
      <Link to={`${RoutePathes.CAST}/${props.id}`}>
        Показать весь актерский состав
      </Link>
      )}
    </>
  );
};

Cast.defaultProps = {
  id: null,
};

export default Cast;
