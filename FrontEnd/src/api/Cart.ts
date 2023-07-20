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

export const deleteCart = async (_id: string, query: string) => {
  try {
    const { data } = await authAxios.delete(`/cart${query}`, {
      data: { _id: _id },
    });
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const patchCartQuantity = async (_id: string, quantity: number) => {
  try {
    const { data } = await authAxios.patch("/cart/quantity", {
      _id,
      quantity,
    });
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const patchCartSelect = async (
  _id: string,
  select: boolean,
  query: string
) => {
  try {
    const { data } = await authAxios.patch(`/cart/select${query}`, {
      _id,
      select,
    });
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};
