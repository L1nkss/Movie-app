import { connect } from "react-redux";
import FilmDetails from "@components/film-details/film-details";
import { Dispatch } from "redux";
import { getFilmDetailsRequest } from "@redux/reducers/films/actions/actions";
import { IRootState } from "@redux/reducers/types/types";

const mapStateToProps = (state: IRootState) => ({
  details: state.films.filmDetails.details,
  loading: state.films.filmDetails.loading,
  error: state.films.filmDetails.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadDetails: (id: number) => dispatch(getFilmDetailsRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
