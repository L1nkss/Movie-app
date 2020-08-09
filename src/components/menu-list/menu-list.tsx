import { TFilmNavigation } from "@constants/types/types";
import MenuListItem from "@components/menu-list/components/menu-list-item";

interface IMenuListProps {
  items: Array<TFilmNavigation>
}

const MenuList: React.FC<IMenuListProps> = (props: IMenuListProps): JSX.Element => {
  return (
    <ul className="menu-list">
      {props.items.map((item) => {
        return <MenuListItem key={item.label} item={item} />;
      })}
    </ul>
  );
};

export default MenuList;
