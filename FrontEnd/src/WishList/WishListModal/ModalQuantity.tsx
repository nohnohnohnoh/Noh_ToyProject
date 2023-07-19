import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";

interface WishListModalProp {
  quantityData: number;
  minusQuantity: () => void;
  plusQuantity: () => void;
}

const WishListModalQuantity = ({
  quantityData,
  minusQuantity,
  plusQuantity,
}: WishListModalProp) => {
  return (
    <WishQuantityBox>
      <span className="label">수량</span>
      <QuantityPatchBox>
        <TextBox>
          <AiOutlineMinus onClick={minusQuantity} />
        </TextBox>
        <TextQuantityBox>{quantityData}</TextQuantityBox>
        <TextBox>
          <AiOutlinePlus onClick={plusQuantity} />
        </TextBox>
      </QuantityPatchBox>
    </WishQuantityBox>
  );
};

const WishQuantityBox = styled.div`
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
  margin-right: 3%;
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

export default WishListModalQuantity;
