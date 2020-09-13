import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "@redux/reducers/types/types";
import { getGenresRequest } from "@redux/reducers/genres/actions/actions";
import { TGetGenresRequest } from "@redux/reducers/genres/actions/types/types";
import AsideMenu from "./aside-menu";

const mapStateToProps = (state: IRootState) => ({
  isLoading: state.genre.loading,
  isError: state.genre.error,
  genres: state.genre.genres,
  filmGenres: state.genre.filmGenres,
});

const mapDispatchToProps = (dispatch: Dispatch<TGetGenresRequest>) => ({
  loadGenres: () => dispatch(getGenresRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu);
