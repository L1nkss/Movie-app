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
    label: "Upcomming",
    icon: "fas fa-table",
    isActive: false,
  },
];

// Список жанров. Возможно временный
const FILM_GENRES = [
  {
    name: "Жанр 1",
    label: "Жанр 1",
    icon: "fas fa-dot-circle",
    isActive: false,
  },
  {
    name: "Жанр 1",
    label: "Жанр 2",
    icon: "fas fa-dot-circle",
    isActive: false,
  },
  {
    name: "Жанр 1",
    label: "Жанр 3",
    icon: "fas fa-dot-circle",
    isActive: false,
  },
  {
    name: "Жанр 1",
    label: "Жанр 4",
    icon: "fas fa-dot-circle",
    isActive: false,
  },
  {
    name: "Жанр 1",
    label: "Жанр 5",
    icon: "fas fa-dot-circle",
    isActive: false,
  },
  {
    name: "Жанр 1",
    label: "Жанр 6",
    icon: "fas fa-dot-circle",
    isActive: false,
  },
  {
    name: "Жанр 1",
    label: "Жанр 7",
    icon: "fas fa-dot-circle",
    isActive: false,
  },
  {
    name: "Жанр 1",
    label: "Жанр 8",
    icon: "fas fa-dot-circle",
    isActive: false,
  },
];

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3";

export { FILM_NAVIGATION, FILM_GENRES, BASE_URL };
