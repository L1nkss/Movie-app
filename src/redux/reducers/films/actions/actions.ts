import ActionType from "@redux/reducers/films/constants/constants";
import Adapter from "@redux/reducers/films/utils/adapter";
import {
  TFilmsSuccess, TFilmsRequest, TFilmsError, TServerFilm,
} from "@redux/reducers/films/types/types";

const getFilmsRequest = (type: string | number): TFilmsRequest => ({ type: ActionType.GET_FILMS_REQUEST, payload: { type } });

const getTotalFilmsPages = (pages: any) => ({ type: ActionType.GET_TOTAL_FILMS_PAGES, payload: pages });

const getCurrentPage = (page: any) => ({ type: ActionType.GET_LOADED_PAGE, payload: page });

const getFilmsSuccess = (films: Array<TServerFilm>): TFilmsSuccess => ({ type: ActionType.GET_FILM_SUCCESS, payload: Adapter.changeKeyName(films) });

const getMoreFilmsRequest = (): TFilmsRequest => ({ type: ActionType.GET_MORE_FILM_REQUEST });

const getMoreFilmsSuccess = (films: Array<TServerFilm>): TFilmsSuccess => (
  { type: ActionType.GET_MORE_FILM_SUCCESS, payload: Adapter.changeKeyName(films) });

const getFilmsError = (): TFilmsError => ({ type: ActionType.GET_FILM_ERROR });

const setSearchString = (value: string) => ({ type: ActionType.SET_SEARCH_STRING, payload: value });

export {
  getFilmsError,
  getFilmsRequest,
  getFilmsSuccess,
  getMoreFilmsRequest,
  getMoreFilmsSuccess,
  getTotalFilmsPages,
  getCurrentPage,
  setSearchString,
};
