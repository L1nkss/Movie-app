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
  }

  getGenres() {
    return this.api.get("genre/movie/list", { params: { api_key: this.token } });
  }
  // getGenres() {
  //   return this.api.get("/genre/movie/list?api_key=f3dfa7a0f96b31113bbc972260285be3&language=en-US");
  // }
}

export default new Api(BASE_URL, key);
