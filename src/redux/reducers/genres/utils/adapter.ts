class Adapter {
  static addIconField(values: any) {
    return values.map((value: any) => {
      return { ...value, icon: "fas fa-dot-circle" };
    });
  }
}

export default Adapter;
