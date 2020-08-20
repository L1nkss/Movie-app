import { createSelector } from "reselect";
import { IRootState } from "@redux/reducers/types/types";
import { TFilm } from "@redux/reducers/films/types/types";

const getFilteredFilms = createSelector(
  (state: IRootState) => { return state.films.films; },
  (state: IRootState) => { return state.films.searchString; },
  (films: Array<TFilm>, searchString: string) => {
    return films.filter((film) => {
      return film.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
    });
  },
);

const getActiveGenre = createSelector(
  (state: IRootState) => { return [...state.genre.filmGenres, ...state.genre.genres]; },
  (state: IRootState) => { return state.genre.active},
  (genres, active: string): number | string => {
    const idx = genres.findIndex((genre) => genre.label === active);
    return genres[idx].id ? genres[idx].id : genres[idx].label;
  },
);

export {getFilteredFilms, getActiveGenre};
