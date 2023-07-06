export type AuthType = {
  id: string;
  passWord: string;
  pwc?: string;
  nickName?: string;
};

export type ProductType = {
  _id?: string | undefined;
  id?: number | undefined;
  src?: string | undefined;
  name?: string | undefined;
  price?: number | undefined;
};
