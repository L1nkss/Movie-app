import { combineReducers } from "redux";
import { reducer as genreReducer } from "@redux/reducers/genres/reducer";

export default combineReducers({
  genre: genreReducer,
});
