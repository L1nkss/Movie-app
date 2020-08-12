import { connect } from "react-redux";
import { IRootState } from "@redux/reducers/types/types";
import { getGenresRequest } from "@redux/reducers/genres/actions/actions";
import AsideMenu from "./aside-menu";

const mapStateToProps = (state: IRootState) => ({
  isLoading: state.genre.loading,
  isError: state.genre.error,
  genres: state.genre.genres,
  filmGenres: state.genre.filmGenres,
});

// TOdo исправить
const mapDispatchToProps = (dispatch: any) => ({
  loadGenres: () => dispatch(getGenresRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu);
