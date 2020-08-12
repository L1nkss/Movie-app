import { connect } from "react-redux";
import { IRootState } from "@redux/reducers/types/types";
import { getFilmsRequest } from "@redux/reducers/films/actions/actions";
import Main from "./main";

const mapStateToProps = (state: IRootState) => ({
  films: state.films.films,
  loading: state.films.loading,
  error: state.films.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  loadFilms: (type: string) => dispatch(getFilmsRequest(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
