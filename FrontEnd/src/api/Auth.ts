import { AuthType } from "../types/type";
import { defaultAxios } from "./index";

export const createAuth = async (params: AuthType) => {
  try {
    const response = await defaultAxios.post("/auth/create", params);
    console.log(response);
    return response;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};
