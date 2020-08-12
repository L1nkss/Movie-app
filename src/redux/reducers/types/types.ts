import { IFilmsState } from "@redux/reducers/films/types/types";
import { IGenreState } from "@redux/reducers/genres/types/types";

export interface IRootState {
  films: IFilmsState,
  genre: IGenreState
}
