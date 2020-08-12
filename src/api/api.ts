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
      timeout: 10000,
      headers: { "X-Custom-Header": "foobar" },
      withCredentials: false,
    });
    this.token = token;

    this.getGenres = this.getGenres.bind(this);
    this.getFilms = this.getFilms.bind(this);
    this.discoverMovieByGenre = this.discoverMovieByGenre.bind(this);
  }

  getGenres() {
    return this.api.get("genre/movie/list", { params: { api_key: this.token } });
  }

  getFilms(type: string) {
    return this.api.get(`movie/${type}`, { params: { api_key: this.token } });
  }

  discoverMovieByGenre(id: number) {
    return this.api.get("discover/movie", { params: { api_key: this.token, with_genres: id } });
  }
}

export default new Api(BASE_URL, key);
