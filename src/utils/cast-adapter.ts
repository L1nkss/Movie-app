import { TCastServer, TCast } from "@constants/types";

export default class CastAdapter {
  static adaptValues(values: Array<TCastServer>) {
    return values.map((value: TCastServer) => this.adaptValue(value));
  }

  static adaptValue(value: TCastServer) {
    return {
      character: value.character,
      id: value.id,
      name: value.name,
      profilePath: value.profile_path,
    };
  }
}
