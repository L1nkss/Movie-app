import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "@constants/contants";
import key from "../../config/key";

class Api {
  api: AxiosInstance;

  private token: string;

  constructor(url: string, token: string) {
    this.api = axios.create({
      baseURL: url,
      params: {
        api_key: token,
      },
      timeout: 90000,
      headers: { "X-Custom-Header": "foobar" },
      withCredentials: false,
    });
    this.token = token;

    this.getGenres = this.getGenres.bind(this);
    this.getFilms = this.getFilms.bind(this);
    this.discoverMovieByGenre = this.discoverMovieByGenre.bind(this);
    this.getFilmDetails = this.getFilmDetails.bind(this);
    this.getRecommendations = this.getRecommendations.bind(this);
    this.getFilmCast = this.getFilmCast.bind(this);
    this.getPersonDetails = this.getPersonDetails.bind(this);
    this.discover = this.discover.bind(this);
    // this.getCombine = this.getCombine.bind(this);
  }

  // Общие запросы
  // getCombine(id: number) {
  //   return this.api.get(`person/${id}/combined_credits`, { params: { api_key: this.token } });
  // }

  // Жанры
  getGenres() {
    return this.api.get("genre/movie/list", { params: { api_key: this.token } });
  }

  // Запросы по фильмам
  getFilms(type: string, page = 1) {
    return this.api.get(`movie/${type}`, { params: { api_key: this.token, page, language: "en-US" } });
  }

  discoverMovieByGenre(id: number) {
    return this.api.get("discover/movie", { params: { api_key: this.token, with_genres: id } });
  }

  // Запросы по детальной информации о фильме
  getFilmDetails(id: number) {
    return this.api.get(`movie/${id}`, { params: { api_key: this.token } });
  }

  getRecommendations(id: number) {
    return this.api.get(`movie/${id}/recommendations`, { params: { api_key: this.token } });
  }

  getFilmCast(id: number) {
    return this.api.get(`movie/${id}/credits`, { params: { api_key: this.token } });
  }

  // Запросы о актере
  getPersonDetails(id: number) {
    return this.api.get(`person/${id}`, { params: { api_key: this.token } });
  }

  discover(params: any) {
    return this.api.get("discover/movie", { params: { api_key: this.token, ...params } });
  }
}

export default new Api(BASE_URL, key);
