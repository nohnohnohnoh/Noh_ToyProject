import { defaultAxios } from ".";

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

// export const newProductId = async (params: type) => {
//   try {
//   } catch (error: any) {
//     const { data } = error.response;
//     const errorData = data;
//     return errorData;
//   }
// };

// export const recommendProductId = async () => {};
