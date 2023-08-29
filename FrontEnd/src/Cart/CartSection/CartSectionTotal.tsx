import { postMyOrderProduct } from "../../api/ProductOrder";
import { useNavigate } from "react-router-dom";
import { CartProudctType } from "../../types/type";
import styled from "styled-components";

interface CartSectionProps {
  totalPrice: number;
  selectDataArr: CartProudctType[];
}

const CartTotal = ({ totalPrice, selectDataArr }: CartSectionProps) => {
  const navigate = useNavigate();

  const onClickEntireOrder = () => {
    if (window.confirm("전체상품을 주문하시겠습니까 ?") === true) {
      postMyOrderProduct("?type=전체상품주문", {
        _id: undefined,
        src: undefined,
        name: undefined,
        price: undefined,
        quantity: undefined,
        selectData: undefined,
      }).then((data) => {
        alert(data.message);
        if (window.confirm("주문내역을 확인하시겠습니까 ?") === true) {
          navigate("/mypage");
        } else {
          window.location.reload();
          window.scrollTo(0, 0);
        }
      });
    } else return;
  };

  const onClickSelectOrder = () => {
    if (window.confirm("선택하신 상품을 주문하시겠습니까 ? ") === true) {
      postMyOrderProduct("?type=선택상품주문", {
        _id: undefined,
        src: undefined,
        name: undefined,
        price: undefined,
        quantity: undefined,
        selectData: selectDataArr,
      }).then((data) => {
        alert(data.message);
        if (window.confirm("주문내역을 확인하시겠습니까 ?") === true) {
          navigate("/mypage");
        } else {
          window.location.reload();
          window.scrollTo(0, 0);
        }
      });
    } else return;
  };

  const totalPriceComma = totalPrice.toLocaleString();
  const expectTotalPrice = totalPrice + 2500;
  const expectTotalPriceComma = expectTotalPrice.toLocaleString();

  return (
    <CartTotalBox>
      <CartTotalComponent>
        <TotalPriceBox>
          <span className="text">총 상품금액</span>
          <span className="text">{totalPriceComma}원</span>
        </TotalPriceBox>
        <TotalDeliveryFeeBox>
          <span className="text">총 배송비</span>
          <span className="text">2,500원</span>
        </TotalDeliveryFeeBox>
        <ExpectPirceBox>
          <span className="text">총 결제예정금액</span>
          <span className="text">{expectTotalPriceComma}원</span>
        </ExpectPirceBox>
      </CartTotalComponent>
      <CartTotalButtonBox>
        <EntireButton onClick={onClickEntireOrder}>전체상품주문</EntireButton>
        <SelectButton onClick={onClickSelectOrder}>선택상품주문</SelectButton>
      </CartTotalButtonBox>
    </CartTotalBox>
  );
};

const CartTotalBox = styled.div`
  width: 360px;
  margin: 0 0 0 47px;
  padding: 35px 0;
  ${({ theme }) => theme.media.desktop`
    width: 100%;
    margin: 30px 0 0 0;
    padding: 0;
  `}
`;

const CartTotalComponent = styled.div`
  margin-bottom: 10px;
  padding: 30px 24px;
  border: 1px solid #000;
`;

const TotalPriceBox = styled.div`
  ${({ theme }) => theme.flexMixIn("space-between", "")};
  margin: 0 0 15px;
  .text {
    font-weight: 400;
  }
`;

const TotalDeliveryFeeBox = styled(TotalPriceBox)`
  .text {
    font-weight: 400;
  }
`;

const ExpectPirceBox = styled.div`
  ${({ theme }) => theme.flexMixIn("space-between", "")};
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #e8e8e8;
  .text {
    font-size: 18px;
    font-weight: bold;
  }
`;

const CartTotalButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const EntireButton = styled.button`
  margin: 0 0 10px 0;
  border: 1px solid rgb(26, 26, 26);
  background: rgb(26, 26, 26);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  height: 56px;
`;

const SelectButton = styled(EntireButton)`
  border: 1px solid rgb(214, 214, 214);
  outline: none;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
`;

export default CartTotal;
