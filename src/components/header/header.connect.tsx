import { connect } from "react-redux";
import Header from "@components/header/header";
import { IRootState } from "@redux/reducers/types/types";
import getActiveGenreName from "@components/header/selectors/selectors";
import { Dispatch } from "redux";
import { setSearchString } from "@redux/reducers/films/actions/actions";

const mapStateToProps = (state: IRootState) => ({
  activeGenre: getActiveGenreName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeSearchString: (value: string) => dispatch(setSearchString(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
