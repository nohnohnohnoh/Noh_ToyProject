import { useCallback } from "react";
import { authAxios } from ".";

interface BodyType {
  src: string | undefined;
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
}

export const postMyOrderProduct = async (body: BodyType) => {
  try {
    const { data } = await authAxios.post("/myorder", body);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const getMyOrderProduct = async () => {
  try {
    const { data } = await authAxios.get("/myorder");
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};
