import { TGenre } from "@redux/reducers/genres/types/types";
import { RoutePathes } from "@constants/contants";
import history from "../../../utils/history";

interface IMenuListItem {
  item: TGenre,
  active: string,
  changeActiveGenre: (name: string) => void,
}

const MenuListItem: React.FC<IMenuListItem> = (props: IMenuListItem): JSX.Element => {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
    <li
      className={`menu-list__item ${props.active === props.item.label ? "menu-list__item--active" : ""}`}
      onClick={() => {
        if (props.active === props.item.label) {
          return;
        }
        // Меняем активный жанр
        props.changeActiveGenre(props.item.label);

        history.push(RoutePathes.MOVIES);
      }}
    >
      <span className={`menu-list__item-icon ${props.item.icon}`} />
      {props.item.name}
    </li>
  );
};

export default MenuListItem;
