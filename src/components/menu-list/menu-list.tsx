import { TGenre } from "@redux/reducers/genres/types/types";
import MenuListItem from "@components/menu-list/components/menu-list-item";

interface IMenuListProps {
  items: Array<TGenre>,
  activeGenre: string,
  changeActiveGenre: (name: string) => void,
}

const MenuList: React.FC<IMenuListProps> = (props: IMenuListProps): JSX.Element => {
  return (
    <ul className="menu-list">
      {props.items.map((item: TGenre) => {
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
