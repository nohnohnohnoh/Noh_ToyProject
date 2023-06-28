import { Pagination } from "swiper";
import { defaultAxios } from ".";

export const mainNewProdcut = async () => {
  try {
    const { data } = await defaultAxios.get("/product/main");
    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export const mainNewProdcutPagination = async (query: string | undefined) => {
  try {
    const { data } = await defaultAxios.get(`/product/main?lastid=${query}`);
    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export const newProduct = async () => {
  try {
    const { data } = await defaultAxios.get("/product/new");
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const recommendProduct = async () => {
  try {
    const { data } = await defaultAxios.get("/product/recommend");
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const productId = async (params: string | undefined) => {
  try {
    const { data } = await defaultAxios.get(`/product/${params}`);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

// export const recommendProductId = async () => {};
