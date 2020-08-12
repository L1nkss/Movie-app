import { TFilmNavigation } from "@constants/types/types";

interface IMenuListItem {
  item: TFilmNavigation,
  active: string,
  changeActiveGenre: (name: string) => void
}

const MenuListItem: React.FC<IMenuListItem> = (props: IMenuListItem): JSX.Element => {
  return (
    <li
      className={`menu-list__item ${props.active === props.item.label ? "menu-list__item--active" : ""}`}
      onClick={() => {
        if (props.active === props.item.label) {
          return;
        }
        props.changeActiveGenre(props.item.label);
      }}
    >
      <span className={`menu-list__item-icon ${props.item.icon}`} />
      {props.item.name}
    </li>
  );
};

export default MenuListItem;
