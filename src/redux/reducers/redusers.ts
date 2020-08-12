import { combineReducers } from "redux";
import { reducer as genreReducer } from "@redux/reducers/genres/reducer";
import { reducer as filmsReducer } from "@redux/reducers/films/reducer";

export default combineReducers({
  genre: genreReducer,
  films: filmsReducer,
});
