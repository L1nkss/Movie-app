import { connect } from "react-redux";
import MenuList from "@components/menu-list/menu-list";
import { changeActiveGenre } from "@redux/reducers/genres/actions/actions";
import { IRootState } from "@redux/reducers/types/types";
import { Dispatch } from "redux";
import { setCurrentPage } from "@redux/reducers/films/actions/actions";
import { TChangeActiveGenre } from "@redux/reducers/genres/actions/types/types";
import { TSetCurrentPage } from "@redux/reducers/films/actions/types/types";

const mapStateToProps = (state: IRootState) => ({
  activeGenre: state.genre.active,
});

const mapDispatchToProps = (dispatch: Dispatch<TChangeActiveGenre | TSetCurrentPage>) => ({
  changeActiveGenre: (active: string) => dispatch(changeActiveGenre(active)),
  refreshCurrentPage: () => dispatch(setCurrentPage(0)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
