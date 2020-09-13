import ActionType from "@redux/reducers/films/constants/constants";
import {
  TServerFilm, TFilmDetailServer,
} from "@redux/reducers/films/types/types";
import {
  TFilmsRequest,
  TMoreFilmsRequest,
  TSetCurrentPage,
  TFilmsSuccess,
  TMoreFilmsSuccess,
  TFilmsError,
  TSearchString,
  TFilmDetailsError,
  TFilmDetailsRequest,
  TFilmDetailsSuccess,
} from "@redux/reducers/films/actions/types/types";
import FilmAdapter from "../../../../utils/adapters/film";
import FilmDetailsAdapter from "../../../../utils/adapters/film-details";

// Запрос на получение всех фильмов
const getFilmsRequest = (type: string | number): TFilmsRequest => ({ type: ActionType.GET_FILMS_REQUEST, payload: type });

// Текущая страница
const setCurrentPage = (page: number): TSetCurrentPage => ({ type: ActionType.SET_CURRENT_PAGE, payload: page });

// Фильмы получены успешно
const getFilmsSuccess = (films: Array<TServerFilm>, totalPages: number): TFilmsSuccess => (
  { type: ActionType.GET_FILM_SUCCESS, payload: { data: FilmAdapter.changeKeyName(films), totalPages } }
);

// Получить больше фильмов(следующая страница с фильмами). Запрос
const getMoreFilmsRequest = (type: string | number, page: number): TMoreFilmsRequest => (
  { type: ActionType.GET_MORE_FILM_REQUEST, payload: { type, page } });

// Фильмы получены
const getMoreFilmsSuccess = (films: Array<TServerFilm>): TMoreFilmsSuccess => (
  { type: ActionType.GET_MORE_FILM_SUCCESS, payload: FilmAdapter.changeKeyName(films) });

// Ошибка при получении фильмов
const getFilmsError = (): TFilmsError => ({ type: ActionType.GET_FILM_ERROR });

// Установить строку с поисками фильмов
const setSearchString = (value: string): TSearchString => ({ type: ActionType.SET_SEARCH_STRING, payload: value });

// Получить детальную информацию о фильме. Запрос
const getFilmDetailsRequest = (id: number): TFilmDetailsRequest => ({ type: ActionType.GET_FILM_DETAILS_REQUEST, payload: id });

// Детальная информация полученая
const getFilmDetailsSuccess = (film: TFilmDetailServer): TFilmDetailsSuccess => (
  { type: ActionType.GET_FILM_DETAILS_SUCCESS, payload: FilmDetailsAdapter.changeValuesToFilmDetails(film) }
);

// Ошибка при получении детальной информации
const getFilmDetailsError = (): TFilmDetailsError => ({ type: ActionType.GET_FILM_DETAILS_ERROR });

export {
  getFilmsError,
  getFilmsRequest,
  getFilmsSuccess,
  getMoreFilmsRequest,
  getMoreFilmsSuccess,
  setCurrentPage,
  setSearchString,
  getFilmDetailsRequest,
  getFilmDetailsSuccess,
  getFilmDetailsError,
};
