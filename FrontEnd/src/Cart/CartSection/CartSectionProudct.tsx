import { CartProudctType } from "../../types/type";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";

interface CartProps {
  cartData: CartProudctType[];
}

const CartProduct = ({ cartData }: CartProps) => {
  return (
    <CartProudct>
      <div>
        {cartData.map(({ _id, src, quantity, product_id, price, name }) => {
          const priceComma = price?.toLocaleString();
          const totalPriceComma = (price * quantity).toLocaleString();
          return (
            <CartProductBox key={_id}>
              <Check>
                <CheckIcon type="checkbox" />
              </Check>
              <CartListImgBox>
                <CartListImg src={src} />
              </CartListImgBox>
              <CartListContentBox>
                <span className="text">{name}</span>
                <span className="text">{priceComma}원</span>
                <span className="grayText">
                  배송: 2,500원 [고정] / 기본배송
                </span>
              </CartListContentBox>
              <CartQuantityBox>
                <span className="label">수량</span>
                <QuantityPatchBox>
                  <TextBox>
                    <AiOutlineMinus />
                  </TextBox>
                  <TextQuantityBox>{quantity}</TextQuantityBox>
                  <TextBox>
                    <AiOutlinePlus />
                  </TextBox>
                </QuantityPatchBox>
              </CartQuantityBox>
              <TotalPriceBox>
                <span className="label">주문금액</span>
                <span className="totalPrice">{totalPriceComma}원</span>
              </TotalPriceBox>
              <ButtonBox>
                <WishButton>관심상품</WishButton>
                <OrderButton>주문하기</OrderButton>
              </ButtonBox>
            </CartProductBox>
          );
        })}
      </div>
    </CartProudct>
  );
};

const CartProudct = styled.div`
  flex: 1;
`;

const CartProductBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #e8e8e8;
  padding: 35px 0;
`;

const Check = styled.span`
  display: inline-block;
  margin: 0 10px 0 0;
`;

const CheckIcon = styled.input`
  width: 24px;
  height: 24px;
  border: 1px solid #d9d9d9;
  background: url("https://thedaju.cafe24.com/SkinImg/img/checkbox_off.svg")
    no-repeat center;
  transition: none;
  appearance: none;
  cursor: pointer;
  &:checked {
    background: url("https://thedaju.cafe24.com/SkinImg/img/checkbox_on.svg")
      no-repeat center;
  }
`;

const CartListImgBox = styled.div`
  width: 25%;
  height: 150px;
  padding: 0 0 0 24pxl;
`;

const CartListImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CartListContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 3%;
  .text {
    font-weight: 400;
    margin-bottom: 4%;
  }
  .grayText {
    color: #7d7d7d;
  }
`;

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

const TotalPriceBox = styled.div`
  padding: 24px 0 0 0;
  ${({ theme }) => theme.flexMixIn("", "center")};
  width: 100%;
  margin: 0 0 24px 37px;
  border-top: 1px solid #e8e8e8;
  .label {
    flex: 1;
    font-size: 14px;
    color: #1a1a1a;
    text-align: left;
  }
  .totalPrice {
    font-weight: bold;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  margin: 0 0 0 37px;
`;

const WishButton = styled.button`
  flex: 1;
  height: 50px;
  padding: 16px 20px;
  border: 1px solid rgb(214, 214, 214);
  outline: none;
  font-weight: 400;
  background: rgb(255, 255, 255);
`;

const OrderButton = styled(WishButton)`
  margin-left: 8px;
`;

export default CartProduct;
