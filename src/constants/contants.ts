const FILM_NAVIGATION = [
  {
    name: "Популярные",
    label: "Popular",
    icon: "fas fa-heart",
    isActive: true,
  },
  {
    name: "Самые популярные",
    label: "Top rated",
    icon: "fas fa-chart-line",
    isActive: false,
  },
  {
    name: "Скоро в кино",
    label: "Upcoming",
    icon: "fas fa-table",
    isActive: false,
  },
];

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3";

export { FILM_NAVIGATION, BASE_URL };
