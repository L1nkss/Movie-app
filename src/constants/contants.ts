const FILM_NAVIGATION = [
  {
    name: "Popular",
    label: "popular",
    icon: "fas fa-heart",
  },
  {
    name: "Top Rated",
    label: "top_rated",
    icon: "fas fa-chart-line",
  },
  {
    name: "Upcoming",
    label: "upcoming",
    icon: "fas fa-table",
  },
];

const RoutePathes = {
  MOVIES: "/movies",
  FILM_DETAILS: "/film-details",
  ROOT: "/",
  CAST: "/cast",
  ACTOR: "/actor",
};

const imageUrl = "https://image.tmdb.org/t/p/w342/";

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3";

export { FILM_NAVIGATION, BASE_URL, RoutePathes, imageUrl };
