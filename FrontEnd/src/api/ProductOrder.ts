import { authAxios } from ".";

export const postMyOrderProduct = async (body: any) => {
  try {
    await authAxios.post("/myorder", body);
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const getMyOrderProduct = async () => {
  try {
    const data = await authAxios.get("/myorder");
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};
