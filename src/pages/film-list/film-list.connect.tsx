import { connect } from "react-redux";
import { IRootState } from "@redux/reducers/types/types";
import FilmList from "@pages/film-list/film-list";
import { Dispatch } from "redux";
import { TFilmsRequest } from "@redux/reducers/films/types/types";
import { getFilmsRequest, getMoreFilmsRequest } from "@redux/reducers/films/actions/actions";
import { getFilteredFilms, getActiveGenre } from "./selectors/selectors";

const mapStateToProps = (state: IRootState) => ({
  loading: state.films.loading,
  loadingMoreFilms: state.films.loadingMoreFilms,
  error: state.films.error,
  currentGenre: getActiveGenre(state),
  currentPage: state.films.currentPage,
  totalPage: state.films.totalPages,
  films: getFilteredFilms(state),
});

const mapDispatchToProps = (dispatch: Dispatch<TFilmsRequest>) => ({
  loadFilms: (type: string) => dispatch(getFilmsRequest(type)),
  loadMoreFilms: (type: any, page: number) => dispatch(getMoreFilmsRequest(type, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
