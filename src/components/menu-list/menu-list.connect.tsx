import { connect } from "react-redux";
import MenuList from "@components/menu-list/menu-list";
import {changeActiveGenre} from "@redux/reducers/genres/actions/actions";

const mapStateToProps = (state: any) => ({
  activeGenre: state.genre.active,
});

const mapDispatchToProps = (dispatch: any) => ({
  changeActiveGenre: (active: string) => dispatch(changeActiveGenre(active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
