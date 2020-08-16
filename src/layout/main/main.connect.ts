import { connect } from "react-redux";
import { IRootState } from "@redux/reducers/types/types";
import { getFilmsRequest, getMoreFilmsRequest } from "@redux/reducers/films/actions/actions";
import { TFilmsRequest } from "@redux/reducers/films/types/types";
import { Dispatch } from "redux";
import Main from "./main";
import getFilteredFilms from "../../components/film-list/selectors/selectors";

// const mapStateToProps = (state: IRootState) => ({
//   loading: state.films.loading,
//   error: state.films.error,
//   currentGenre: state.genre.active,
//   films: getFilteredFilms(state),
// });

// const mapDispatchToProps = (dispatch: Dispatch<TFilmsRequest>) => ({
//   loadFilms: (type: string) => dispatch(getFilmsRequest(type)),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Main);
