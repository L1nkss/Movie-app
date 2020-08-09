import MenuList from "@components/menu-list/menu-list";
import { useEffect } from "react";
import { FILM_NAVIGATION, FILM_GENRES } from "@constants/contants";

// Todo испраавить
const AsideMenu: React.FC = (props: any): JSX.Element => {
  useEffect(() => {
    props.loadGenres();
  }, []);
  console.log(props);
  return (
    <aside className="side-menu">
      <div>
        <img width={100} src="image/watch-movie.svg" alt="Лого" />
      </div>
      <div>
        <h3>Фильмы</h3>
        <MenuList items={props.filmGenres} />
      </div>
      <div>
        <h3>Жанры</h3>
        <MenuList items={props.genres} />
      </div>
    </aside>
  );
};

export default AsideMenu;
