import { AuthType } from "../types/type";
import { defaultAxios } from "./index";

export const createAuth = async (params: AuthType) => {
  try {
    const { data } = await defaultAxios.post("/auth/create", params);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};
