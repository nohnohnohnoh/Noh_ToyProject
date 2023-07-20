import CartQuantity from "./CartQuantity";
import { useNavigate } from "react-router-dom";
import { CartProudctType } from "../../../types/type";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

interface CartProps {
  cartData: CartProudctType[];
  onClickOneDelete: (_id: string) => void;
  onClickWishList: (
    _id: string,
    src: string,
    name: string,
    price: number
  ) => void;
  onClickOrder: (
    _id: string,
    src: string,
    name: string,
    price: number,
    quantity: number
  ) => void;
  handleSingleCheck: (
    checked: any,
    cartData: CartProudctType,
    _id: string
  ) => void;
}

const CartProduct = ({
  cartData,
  onClickOneDelete,
  onClickWishList,
  onClickOrder,
  handleSingleCheck,
}: CartProps) => {
  const navigate = useNavigate();

  return (
    <CartProudct>
      <div>
        {cartData.map(
          ({ _id, src, quantity, product_id, price, name }, index) => {
            const priceComma = price?.toLocaleString();
            const totalPriceComma = (price * quantity).toLocaleString();
            return (
              <CartProductBox key={_id}>
                <Check>
                  <CheckIcon
                    type="checkbox"
                    onChange={(e) =>
                      handleSingleCheck(e.target.checked, cartData[index], _id)
                    }
                    checked={cartData[index].select === true ? true : false}
                  />
                </Check>
                <CartListImgBox
                  onClick={() => navigate(`/product/${product_id}`)}
                >
                  <CartListImg src={src} />
                </CartListImgBox>
                <CartListContentBox>
                  <span className="text">{name}</span>
                  <span className="text">{priceComma}원</span>
                  <span className="grayText">
                    배송: 2,500원 [고정] / 기본배송
                  </span>
                </CartListContentBox>
                <Delete onClick={() => onClickOneDelete(_id)} />
                <CartQuantity _id={_id} quantity={quantity} />
                <TotalPriceBox>
                  <span className="label">주문금액</span>
                  <span className="totalPrice">{totalPriceComma}원</span>
                </TotalPriceBox>
                <ButtonBox>
                  <WishButton
                    onClick={() => onClickWishList(_id, src, name, price)}
                  >
                    관심상품
                  </WishButton>
                  <OrderButton
                    onClick={() =>
                      onClickOrder(_id, src, name, price, quantity)
                    }
                  >
                    주문하기
                  </OrderButton>
                </ButtonBox>
              </CartProductBox>
            );
          }
        )}
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
  position: relative;
  padding: 35px 0;
  border-bottom: 1px solid #e8e8e8;
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
  width: 28%;
  height: 150px;
  padding: 0 0 0 24px;
  ${({ theme }) => theme.media.desktop`
    height: 120px;
  `}
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
  ${({ theme }) => theme.media.desktop`
    font-size:14px;
  `}
`;

const Delete = styled(AiOutlineClose)`
  position: absolute;
  right: -2%;
  width: 6%;
  height: 6%;
  color: #b5b5b5;
  cursor: pointer;
`;

const TotalPriceBox = styled.div`
  ${({ theme }) => theme.flexMixIn("", "center")};
  width: 100%;
  margin: 0 0 24px 37px;
  padding: 24px 0 0 0;
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
  display: flex;
  width: 100%;
  margin: 0 0 0 37px;
`;

const WishButton = styled.button`
  flex: 1;
  height: 50px;
  padding: 16px 20px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(214, 214, 214);
  outline: none;
  font-weight: 400;
`;

const OrderButton = styled(WishButton)`
  margin-left: 8px;
`;

export default CartProduct;
