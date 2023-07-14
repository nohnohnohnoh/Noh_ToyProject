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

export type myOrderProductType = {
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  name: string | undefined;
  price: number;
  quantity: number;
  src: string | undefined;
  _id: string | undefined;
  user?: { _id: string | undefined };
};

export type WishListProductType = {
  createdAt: string;
  updatedAt: string;
  name: string;
  price: number;
  src: string;
  _id: string;
  select: boolean;
  product_id: string;
  user: { _id: string };
};

export type CartProudctType = {
  createdAt: string;
  updatedAt: string;
  name: string;
  price: number;
  quantity: number;
  src: string;
  _id: string;
  product_id: string;
  user: { _id: string };
};
