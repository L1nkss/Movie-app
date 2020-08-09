import ActionType from "@redux/reducers/genres/constants/constants";
import { TGenre, TGenreRequest } from "@redux/reducers/genres/types/types";

const getGenresRequest = () => ({ type: ActionType.GET_GENRES_REQUEST });

const getGenresSuccess = (genres: Array<TGenre>) => ({ type: ActionType.GET_GENRES_SUCCESS, payload: genres });

const getGenresError = () => ({ type: ActionType.GET_GENRES_ERROR });

const changeActiveGenre = (active: string) => ({ type: ActionType.CHANGE_ACTIVE_GENRE, active });

export {
  getGenresRequest,
  getGenresSuccess,
  getGenresError,
  changeActiveGenre,
};
