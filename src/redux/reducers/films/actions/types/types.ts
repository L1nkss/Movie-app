import ActionType from "@redux/reducers/films/constants/constants";
import { TFilm, TFilmDetails } from "@redux/reducers/films/types/types";

// Запрос на получение фильмов
export type TFilmsRequest = {
  type: typeof ActionType.GET_FILMS_REQUEST,
  payload?: string | number
};

type TMoreFilmsRequestPayload = {
  type: string | number,
  page: number
};

// Запрос на получение доп. количества фильмов
export type TMoreFilmsRequest = {
  type: typeof ActionType.GET_MORE_FILM_REQUEST,
  payload: TMoreFilmsRequestPayload
};

// Записать текущую страницу
export type TSetCurrentPage = {
  type: typeof ActionType.SET_CURRENT_PAGE,
  payload: number
};

// Запрос на получение фильмов прошел успешно
type TFilmsSuccessPayload = {
  data: Array<TFilm>,
  totalPages: number
};

export type TFilmsSuccess = {
  type: typeof ActionType.GET_FILM_SUCCESS,
  payload: TFilmsSuccessPayload
};

// Запрос на получение доп. количество фильмов прошел успешно
export type TMoreFilmsSuccess = {
  type: typeof ActionType.GET_MORE_FILM_SUCCESS,
  payload: Array<TFilm>
};

// Ошибка при получении фильмов
export type TFilmsError = {
  type: typeof ActionType.GET_FILM_ERROR,
  payload?: void
};

// Установить поисковую строку
export type TSearchString = {
  type: typeof ActionType.SET_SEARCH_STRING,
  payload: string
};

// Запрос на получение детальной информации о фильме
export type TFilmDetailsRequest = {
  type: typeof ActionType.GET_FILM_DETAILS_REQUEST,
  payload: number
};

// Запрос на получение детальной информации прошел успешно
export type TFilmDetailsSuccess = {
  type: typeof ActionType.GET_FILM_DETAILS_SUCCESS,
  payload: TFilmDetails
};

// Ошибка при получении детальной информации
export type TFilmDetailsError = {
  type: typeof ActionType.GET_FILM_DETAILS_ERROR,
  payload?: void,
};
