import { authAxios } from ".";

interface BodyType {
  _id?: string | undefined;
  src?: string | undefined;
  name?: string | undefined;
  price?: number | undefined;
}

export const postWishListProduct = async (body: BodyType) => {
  try {
    const { data } = await authAxios.post("/wishlist", body);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const getWishListProduct = async (query: string) => {
  try {
    const { data } = await authAxios.get(`/wishlist${query}`);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const deleteWishListProduct = async (_id: string, type: string) => {
  try {
    const { data } = await authAxios.delete("/wishlist", {
      data: { id: _id, type: type },
    });
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const patchSelectProduct = async (_id: string, select: boolean) => {
  try {
    const { data } = await authAxios.patch("/wishlist", {
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
