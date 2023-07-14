import styled from "styled-components";

interface BasketProps {
  navigateMain: () => void;
}

const CartHeader = ({ navigateMain }: BasketProps) => {
  return (
    <>
      <BasketHeaderComponent>
        <BasketHeaderText onClick={navigateMain}>홈</BasketHeaderText>
        <BasketHeaderText>/</BasketHeaderText>
        <BasketHeaderBoldText>장바구니</BasketHeaderBoldText>
      </BasketHeaderComponent>
      <BasketTilte>
        <BasketTitleText>장바구니</BasketTitleText>
      </BasketTilte>
    </>
  );
};

const BasketHeaderComponent = styled.div`
  ${({ theme }) => theme.flexMixIn("flex-end", "center")};
  padding: 2.5% 0 0 0;
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const BasketHeaderText = styled.div`
  font-size: 12px;
  color: #7d7d7d;
  padding: 0.25%;
  cursor: pointer;
`;

const BasketHeaderBoldText = styled(BasketHeaderText)`
  font-weight: bold;
  color: #1a1a1a;
`;

const BasketTilte = styled.div`
  width: 92%;
  max-width: 1230px;
  margin: 0 auto 40px auto;
  padding: 45px 0 40px;
  text-align: center;
`;

const BasketTitleText = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #1a1a1a;
`;

export default CartHeader;
