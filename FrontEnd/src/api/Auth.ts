import { AuthType } from "../types/type";
import { defaultAxios } from "./index";

export const createAuth = async (params: AuthType) => {
  try {
    const { data } = await defaultAxios.post("/auth/create", params);
    console.log(data);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const loginAuth = async (params: AuthType) => {
  try {
    const { data } = await defaultAxios.post("/auth/login", params);
    console.log(data);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};
