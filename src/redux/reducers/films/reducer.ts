import { Reducer } from "redux";
import ActionType from "@redux/reducers/films/constants/constants";
import { IFilmsState } from "@redux/reducers/films/types/types";

const initialState: IFilmsState = {
  films: [],
  loading: false,
  error: false,
};

const reducer: Reducer<IFilmsState> = (state = initialState, action): IFilmsState => {
  switch (action.type) {
    case ActionType.GET_FILMS_REQUEST:
      return { ...state, loading: true };

    case ActionType.GET_FILM_SUCCESS:
      return { ...state, loading: false, films: action.payload };

    case ActionType.GET_FILM_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export { reducer };
