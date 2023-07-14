import { useEffect, useState } from "react";
import CartProduct from "./CartSectionProudct";
import CartTotal from "./CartSectionTotal";
import { CartProudctType } from "../../types/type";
import styled from "styled-components";

interface CartProps {
  cartData: CartProudctType[];
}

const CartSection = ({ cartData }: CartProps) => {
  const [totalArr, setTotalArr] = useState<number[]>([]);
  let totalPrice = 0;

  useEffect(() => {
    cartData.map(({ price, quantity }) => {
      return totalArr.push(price * quantity);
    });
  }, [cartData]);

  const totalPriceFunction = () => {
    for (let i = 0; i < totalArr.length; i++) {
      totalPrice += totalArr[i];
    }
    return totalPrice;
  };
  totalPriceFunction();

  return (
    <CartSectionComponents>
      <CartHeader>
        <h3 className="title">장바구니 상품</h3>
      </CartHeader>
      <CartContainer>
        <CartProduct cartData={cartData} />
        <CartTotal totalPrice={totalPrice} />
      </CartContainer>
    </CartSectionComponents>
  );
};

const CartSectionComponents = styled.div`
  max-width: 1230px;
  width: 92%;
  margin: 4% auto 0;
`;

const CartHeader = styled.div`
  margin-bottom: 15px;
  .title {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    text-align: left;
  }
`;

const CartContainer = styled.div`
  border-top: 2px solid #1a1a1a;
  display: flex;
`;

export default CartSection;
