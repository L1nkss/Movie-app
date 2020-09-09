export default class ActorAdapter {
  // todo исправить
  static adaptValues(value: any) {
    return {
      birthday: value.birthday,
      name: value.name,
      placeOfBirth: value.place_of_birth,
      profilePath: value.profile_path,
      deathDay: value.deathday,
      biography: value.biography,
    };
  }
}
