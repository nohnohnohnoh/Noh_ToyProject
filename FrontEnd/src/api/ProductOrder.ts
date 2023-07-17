import { authAxios } from ".";
import { CartProudctType } from "../types/type";

interface BodyType {
  src: string | undefined;
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
  selectData: CartProudctType[] | undefined;
}

export const postMyOrderProduct = async (query: string, body: BodyType) => {
  try {
    const { data } = await authAxios.post(`/myorder${query}`, body);
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
