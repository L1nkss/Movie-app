import ActionType from "@redux/reducers/films/constants/constants";
import {
  TFilmsSuccess, TFilmsRequest, TFilmsError, TServerFilm, TFilmDetails, TFilmDetailServer,
} from "@redux/reducers/films/types/types";
import FilmAdapter from "../../../../utils/adapters/film";
import FilmDetailsAdapter from "../../../../utils/adapters/film-details";

// Запрос на получение всех фильмов
const getFilmsRequest = (type: string | number): TFilmsRequest => ({ type: ActionType.GET_FILMS_REQUEST, payload: { type } });

// Получить общее количество страниц с фильмами
const getTotalFilmsPages = (pages: number) => ({ type: ActionType.GET_TOTAL_FILMS_PAGES, payload: pages });

// Текущая страница
const getCurrentPage = (page: number) => ({ type: ActionType.GET_LOADED_PAGE, payload: page });

// Фильмы получены успешно
const getFilmsSuccess = (films: Array<TServerFilm>): TFilmsSuccess => ({ type: ActionType.GET_FILM_SUCCESS, payload: FilmAdapter.changeKeyName(films) });

// Получить больше фильмов(следующая страница с фильмами). Запрос
const getMoreFilmsRequest = (): TFilmsRequest => ({ type: ActionType.GET_MORE_FILM_REQUEST });

// Фильмы получены
const getMoreFilmsSuccess = (films: Array<TServerFilm>): TFilmsSuccess => (
  { type: ActionType.GET_MORE_FILM_SUCCESS, payload: FilmAdapter.changeKeyName(films) });

// Ошибка при получении фильмов
const getFilmsError = (): TFilmsError => ({ type: ActionType.GET_FILM_ERROR });

// Установить строку с поисками фильмов
const setSearchString = (value: string) => ({ type: ActionType.SET_SEARCH_STRING, payload: value });

// Получить детальную информацию о фильме. Запрос
const getFilmDetailsRequest = (id: number) => ({ type: ActionType.GET_FILM_DETAILS_REQUEST, payload: id });

// Детальная информация полученая
const getFilmDetailsSuccess = (film: TFilmDetailServer) => (
  { type: ActionType.GET_FILM_DETAILS_SUCCESS, payload: FilmDetailsAdapter.changeValuesToFilmDetails(film) }
);

// Ошибка при получении детальной информации
const getFilmDetailsError = () => ({ type: ActionType.GET_FILM_DETAILS_ERROR });

export {
  getFilmsError,
  getFilmsRequest,
  getFilmsSuccess,
  getMoreFilmsRequest,
  getMoreFilmsSuccess,
  getTotalFilmsPages,
  getCurrentPage,
  setSearchString,
  getFilmDetailsRequest,
  getFilmDetailsSuccess,
  getFilmDetailsError,
};
