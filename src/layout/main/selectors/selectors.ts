import { createSelector } from "reselect";
import { IRootState } from "@redux/reducers/types/types";

const getFilteredFilms = createSelector(
  (state: IRootState) => { return state.films.films; },
  (state: IRootState) => { return state.films.searchString; },
  (films, searchString) => {
    return films.filter((film) => {
      return film.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
    });
  },
);

export default getFilteredFilms;
