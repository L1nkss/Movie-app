import { TServerGenre, TGenre } from "@redux/reducers/genres/types/types";

class GenreAdapter {
  static addIconField(values: Array<TServerGenre>) {
    return values.map((value: TServerGenre): TGenre => {
      return { ...value, icon: "fas fa-dot-circle", label: value.name };
    });
  }
}

export default GenreAdapter;
