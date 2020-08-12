import ActionType from "@redux/reducers/films/constants/constants";
import Adapter from "@redux/reducers/films/utils/adapter";
import { TFilmsSuccess, TFilmsRequest, TFilmsError, TServerFilm } from "@redux/reducers/films/types/types";

const getFilmsRequest = (type: string | number): TFilmsRequest => ({ type: ActionType.GET_FILMS_REQUEST, payload: { type } });

const getFilmsSuccess = (films: Array<TServerFilm>): TFilmsSuccess => ({ type: ActionType.GET_FILM_SUCCESS, payload: Adapter.changeKeyName(films) });

const getFilmsError = (): TFilmsError => ({ type: ActionType.GET_FILM_ERROR });

export {
  getFilmsError,
  getFilmsRequest,
  getFilmsSuccess,
};
