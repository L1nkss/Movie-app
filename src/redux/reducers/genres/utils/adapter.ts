class genreAdapter {
  static addIconField(values: any) {
    return values.map((value: any) => {
      return { ...value, icon: "fas fa-dot-circle", label: value.name };
    });
  }
}

export default genreAdapter;
