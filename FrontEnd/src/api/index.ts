import axios from "axios";

const BASE_URL = "http://3.39.253.185/";

const axiosApi = (url = BASE_URL) => {
  const instance = axios.create({ baseURL: url });
  return instance;
};

const axiosAuthApi = (url = BASE_URL) => {
  const localStorageToken = localStorage.getItem("AUTH_TOKEN");
  const instance = axios.create({
    headers: {
      Authorization: localStorageToken,
    },
    baseURL: url,
  });
  return instance;
};

export const defaultAxios = axiosApi(BASE_URL);
export const authAxios = axiosAuthApi(BASE_URL);
