import { connect } from "react-redux";
import { IRootState } from "@redux/reducers/types/types";
import FilmList from "@components/film-list/film-list";
import { Dispatch } from "redux";
import { TFilmsRequest } from "@redux/reducers/films/types/types";
import { getFilmsRequest } from "@redux/reducers/films/actions/actions";
import getFilteredFilms from "./selectors/selectors";

const mapStateToProps = (state: IRootState) => ({
  loading: state.films.loading,
  error: state.films.error,
  currentGenre: state.genre.active,
  films: getFilteredFilms(state),
});

const mapDispatchToProps = (dispatch: Dispatch<TFilmsRequest>) => ({
  loadFilms: (type: string) => dispatch(getFilmsRequest(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
