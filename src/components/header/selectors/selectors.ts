import { createSelector } from "reselect"
import { IRootState } from "@redux/reducers/types/types";
import {TGenre} from "@redux/reducers/genres/types/types";

const getActiveGenreName = createSelector(
  (state: IRootState): Array<TGenre> => { return [...state.genre.genres, ...state.genre.filmGenres]; },
  (state: IRootState): string => { return state.genre.active; },
  (genres, active): string => {
    const idx = genres.findIndex((genre) => genre.label === active);

    return genres[idx].name;
  },
);

export default getActiveGenreName;
