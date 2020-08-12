import ActionType from "@redux/reducers/films/constants/constants";
import Adapter from "@redux/reducers/films/utils/adapter";

const getFilmsRequest = (type: string) => ({ type: ActionType.GET_FILMS_REQUEST, payload: { type } });

const getFilmsSuccess = (films: any) => ({ type: ActionType.GET_FILM_SUCCESS, payload: Adapter.changeKeyName(films) });

const getFilmsError = () => ({ type: ActionType.GET_FILM_ERROR });

export {
  getFilmsError,
  getFilmsRequest,
  getFilmsSuccess,
};
