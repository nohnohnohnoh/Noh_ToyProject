import { defaultAxios } from ".";

export const mainNewProduct = async (query: string | undefined) => {
  try {
    const { data } = await defaultAxios.get(`/product/main/${query}`);
    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export const newProduct = async (query: string | undefined) => {
  try {
    const { data } = await defaultAxios.get(`/product/new${query}`);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const searchProduct = async (query: string | undefined) => {
  try {
    const { data } = await defaultAxios.get(`/product/search${query}`);
    return data;
  } catch (error: any) {
    const { data } = error.response;
    const errorData = data;
    return errorData;
  }
};

export const recommendProduct = async (query: string | undefined) => {
  try {
    const { data } = await defaultAxios.get(`/product/recommend${query}`);
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
