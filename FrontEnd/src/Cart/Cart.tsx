import { useCallback, useEffect, useState } from "react";
import { getCart } from "../api/Cart";
import CartHeader from "./CartHeader";
import CartSection from "./CartSection/CartSection";
import CartFooter from "./CartFooter";
import { useNavigate } from "react-router-dom";
import { CartProudctType } from "../types/type";
import styled from "styled-components";

const Cart = () => {
  const [cartData, setCartData] = useState<CartProudctType[]>([]);
  const navigate = useNavigate();

  const cartProductAxios = useCallback(async () => {
    const data = await getCart();
    return data;
  }, []);

  useEffect(() => {
    cartProductAxios().then(({ cart }) => {
      setCartData(cart);
    });
  }, [cartProductAxios]);

  const navigateMain = () => {
    navigate("/");
  };

  return (
    <CartComponent>
      <CartHeader navigateMain={navigateMain} />
      <CartSection cartData={cartData} setCartData={setCartData} />
      <CartFooter />
    </CartComponent>
  );
};

const CartComponent = styled.div`
  width: 100%;
  zoom: 1;
  position: relative;
  margin: 0 auto;
`;

export default Cart;
