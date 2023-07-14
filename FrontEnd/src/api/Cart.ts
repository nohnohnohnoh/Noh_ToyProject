import { authAxios } from ".";

interface BodyType {
  _id: string | undefined;
  src: string | undefined;
  name: string | undefined;
  price: number | undefined;
  quantity: number | undefined;
}

export const postCart = async (body: BodyType) => {
  try {
    const { data } = await authAxios.post("/cart", body);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const getCart = async () => {
  try {
    const { data } = await authAxios.get("/cart");
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const deleteCart = async (_id: string, type: string) => {
  try {
    const { data } = await authAxios.delete("/cart", {
      data: { _id, type: type },
    });
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};
