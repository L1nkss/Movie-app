import { TFilmNavigation } from "@constants/types/types";
import MenuListItem from "@components/menu-list/components/menu-list-item";

interface IMenuListProps {
  items: Array<TFilmNavigation>,
  activeGenre: string,
  changeActiveGenre: (name: string) => void
}

const MenuList: React.FC<IMenuListProps> = (props: IMenuListProps): JSX.Element => {
  return (
    <ul className="menu-list">
      {props.items.map((item) => {
        return (
          <MenuListItem
            key={item.id ? item.id : item.label}
            item={item}
            active={props.activeGenre}
            changeActiveGenre={props.changeActiveGenre}
          />
        );
      })}
    </ul>
  );
};

export default MenuList;
