import styled from "styled-components";

const DetailAreaButton = () => {
  return (
    <ButtonBox>
      <BuyButton>BUY IT NOW</BuyButton>
      <CartButton>CART</CartButton>
      <WishButton>WISH LIST</WishButton>
    </ButtonBox>
  );
};

const ButtonBox = styled.div`
  display: flex;
`;

const BuyButton = styled.button`
  flex-basis: 230px;
  height: 70px;
  padding: 25px 0;
  font-size: 16px;
  font-weight: 400;
  background: #1a1a1a;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CartButton = styled(BuyButton)`
  flex: 1;
  margin-left: 20px;
  background: #fff;
  color: #1a1a1a;
  border: 1px solid #d6d6d6;
`;

const WishButton = styled(CartButton)``;

export default DetailAreaButton;
