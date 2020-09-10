import { Reducer } from "redux";
import ActionType from "@redux/reducers/films/constants/constants";
import { IFilmsState } from "@redux/reducers/films/types/types";

const initialState: IFilmsState = {
  films: [],
  filmDetails: {
    loading: false,
    error: false,
    details: null,
  },
  loading: false,
  error: false,
  currentPage: 0,
  totalPages: 0,
  searchString: "",
};

const reducer: Reducer<IFilmsState> = (state = initialState, action): IFilmsState => {
  switch (action.type) {
    case ActionType.GET_FILMS_REQUEST:
      return { ...state, loading: true, error: false };

    case ActionType.GET_FILM_SUCCESS:
      return {
        ...state, loading: false, films: action.payload.data, totalPages: action.payload.totalPages,
      };

    // case ActionType.GET_MORE_FILM_REQUEST:
    //   return { ...state, loading: true };

    case ActionType.GET_MORE_FILM_SUCCESS:
      // console.log("Пред стейт: ", state.films);
      // console.log("Новое значение: ", action.payload);
      return { ...state, loading: false, films: [...state.films, ...action.payload] };

    case ActionType.GET_TOTAL_FILMS_PAGES:
      return { ...state, totalPages: action.payload };

    case ActionType.GET_LOADED_PAGE:
      return { ...state, currentPage: action.payload };

    case ActionType.GET_FILM_ERROR:
      return { ...state, loading: false, error: true };

    case ActionType.SET_SEARCH_STRING:
      return { ...state, searchString: action.payload };

    case ActionType.GET_FILM_DETAILS_REQUEST:
      return { ...state, filmDetails: { ...state.filmDetails, loading: true } };

    case ActionType.GET_FILM_DETAILS_SUCCESS:
      return { ...state, filmDetails: { ...state.filmDetails, loading: false, details: action.payload } };

    case ActionType.GET_FILM_DETAILS_ERROR:
      return { ...state, filmDetails: { ...state.filmDetails, loading: false, error: true } };

    default:
      return state;
  }
};

export { reducer };
