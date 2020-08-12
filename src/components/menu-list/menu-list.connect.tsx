import { connect } from "react-redux";
import MenuList from "@components/menu-list/menu-list";
import { changeActiveGenre } from "@redux/reducers/genres/actions/actions";
import { IRootState } from "@redux/reducers/types/types";
import { Dispatch } from "redux";
import { GenreActionTypes } from "@redux/reducers/genres/types/types";

const mapStateToProps = (state: IRootState) => ({
  activeGenre: state.genre.active,
});

const mapDispatchToProps = (dispatch: Dispatch<GenreActionTypes>) => ({
  changeActiveGenre: (active: string) => dispatch(changeActiveGenre(active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
