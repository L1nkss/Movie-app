import MenuList from "@components/menu-list/menu-list.connect";
import { useEffect } from "react";
import { TGenre } from "@redux/reducers/genres/types/types";
import Spinner from "@components/spinner/spinner";

interface IAsideMenuProps {
  isLoading: boolean,
  genres: Array<TGenre> | [],
  filmGenres: Array<TGenre>,
  loadGenres: () => void
}

// Todo испраавить
const AsideMenu: React.FC<IAsideMenuProps> = (props: IAsideMenuProps): JSX.Element => {
  useEffect(() => {
    props.loadGenres();
  }, []);
  return (
    <aside className="side-menu">
      <div>
        <img width={100} src="/image/watch-movie.svg" alt="Лого" />
      </div>
      {props.isLoading && <Spinner />}
      {!props.isLoading && (
      <>
        <div>
          <h3>Фильмы</h3>
          <MenuList items={props.filmGenres} />
        </div>
        <div>
          <h3>Жанры</h3>
          <MenuList items={props.genres} />
        </div>
      </>
      )}
    </aside>
  );
};

export default AsideMenu;
