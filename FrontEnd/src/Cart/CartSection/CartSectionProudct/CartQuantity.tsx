import { useState } from "react";
import { patchCartQuantity } from "../../../api/Cart";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";

interface CartSectionProps {
  _id: string;
  quantity: number;
}

const CartQuantity = ({ _id, quantity }: CartSectionProps) => {
  const [quantityData, setQuantityData] = useState(quantity);

  const plustQuantity = () => {
    setQuantityData(quantityData + 1);
    patchCartQuantity(_id, quantity + 1);
    window.location.reload();
  };

  const minusQuantity = () => {
    if (quantity === 1) return alert("더 이상 수량을 줄일 수 없습니다.");
    setQuantityData(quantityData - 1);
    patchCartQuantity(_id, quantity - 1).then((data) => console.log(data));
    window.location.reload();
  };

  return (
    <CartQuantityBox>
      <span className="label">수량</span>
      <QuantityPatchBox>
        <TextBox>
          <AiOutlineMinus onClick={minusQuantity} />
        </TextBox>
        <TextQuantityBox>{quantityData}</TextQuantityBox>
        <TextBox>
          <AiOutlinePlus onClick={plustQuantity} />
        </TextBox>
      </QuantityPatchBox>
    </CartQuantityBox>
  );
};

const CartQuantityBox = styled.div`
  padding: 0 0 0 37px;
  ${({ theme }) => theme.flexMixIn("", "center")};
  width: 100%;
  margin: 24px 0;
  .label {
    flex: 1;
    font-size: 14px;
    color: #7a7a7a;
  }
`;

const QuantityPatchBox = styled.div`
  display: flex;
`;

const TextQuantityBox = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  width: 40px;
  height: 40px;
  border: 1px solid #d9d9d9;
`;

const TextBox = styled(TextQuantityBox)`
  cursor: pointer;
`;

export default CartQuantity;
