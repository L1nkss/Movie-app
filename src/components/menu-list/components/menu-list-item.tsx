import { THandleClick } from "@components/menu-list/menu-list";
import { TGenre } from "@redux/reducers/genres/types/types";

interface IMenuListItem {
  item: TGenre,
  active: string,
  changeActiveGenre: (name: string) => void,
  handleClick: THandleClick<number | string>
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
        // Запускаем сагу на получение фильмов(если ключ ID существует, отправяем по жанрам)
        if (props.item.id) {
          props.handleClick(props.item.id);
          return;
        }
        props.handleClick(props.item.label);
      }}
    >
      <span className={`menu-list__item-icon ${props.item.icon}`} />
      {props.item.name}
    </li>
  );
};

export default MenuListItem;
