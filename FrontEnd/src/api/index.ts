import axios from "axios";

const BASE_URL = "http://localhost:8080";

const axiosApi = (url = BASE_URL) => {
  const instance = axios.create({ baseURL: url });
  return instance;
};

export const defaultAxios = axiosApi(BASE_URL);

axios.create({ baseURL: BASE_URL });
