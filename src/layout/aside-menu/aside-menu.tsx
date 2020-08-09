import MenuList from "@components/menu-list/menu-list";
import { FILM_NAVIGATION, FILM_GENRES } from "@constants/contants";

const AsideMenu: React.FC = (): JSX.Element => {
  return (
    <aside className="side-menu">
      <div>
        <img width={100} src="image/watch-movie.svg" alt="Лого" />
      </div>
      <div>
        <h3>Фильмы</h3>
        <MenuList items={FILM_NAVIGATION} />
      </div>
      <div>
        <h3>Жанры</h3>
        <MenuList items={FILM_GENRES} />
      </div>
    </aside>
  );
};

export default AsideMenu;
