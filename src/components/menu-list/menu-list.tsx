import { TGenre } from "@redux/reducers/genres/types/types";
import MenuListItem from "@components/menu-list/components/menu-list-item";

export type THandleClick<T> = (type: T) => void;

interface IMenuListProps {
  items: Array<TGenre>,
  activeGenre: string,
  changeActiveGenre: (name: string) => void,
  handleClick: THandleClick<string | number>
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
            handleClick={props.handleClick}
          />
        );
      })}
    </ul>
  );
};

export default MenuList;
