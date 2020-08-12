import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IRootState } from "@redux/reducers/types/types";
import { getGenresRequest } from "@redux/reducers/genres/actions/actions";
import { getFilmsRequest } from "@redux/reducers/films/actions/actions";
import { GenreActionTypes } from "@redux/reducers/genres/types/types";
import { TFilmsRequest } from "@redux/reducers/films/types/types";
import AsideMenu from "./aside-menu";

const mapStateToProps = (state: IRootState) => ({
  isLoading: state.genre.loading,
  isError: state.genre.error,
  genres: state.genre.genres,
  filmGenres: state.genre.filmGenres,
});

const mapDispatchToProps = (dispatch: Dispatch<GenreActionTypes | TFilmsRequest>) => ({
  loadGenres: () => dispatch(getGenresRequest()),
  handleFilmTabClick: (type: string) => dispatch(getFilmsRequest(type)),
  handleGenreTabClick: (id: number) => dispatch(getFilmsRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AsideMenu);
