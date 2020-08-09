import { TFilmNavigation } from "@constants/types/types";

interface IMenuListItem {
  item: TFilmNavigation
}

const MenuListItem: React.FC<IMenuListItem> = (props: IMenuListItem): JSX.Element => {
  return (
    <li className={`menu-list__item ${props.item.isActive ? "menu-list__item--active" : ""}`}>
      <span className={`menu-list__item-icon ${props.item.icon}`} />
      {props.item.name}
    </li>
  );
};

export default MenuListItem;
