import { useNavigate } from "react-router-dom";
import { myOrderProductType } from "../types/type";
import styled from "styled-components";

interface MyPageListProps {
  orderProduct: myOrderProductType[];
}

const MyPageList = ({ orderProduct }: MyPageListProps) => {
  const navigate = useNavigate();
  return (
    <MyPageListComponent>
      <MyPageListHeader>
        <h3 className="title">주문내역 조회</h3>
      </MyPageListHeader>
      <MyPageListSection>
        {orderProduct.map(
          ({
            _id,
            src,
            name,
            price,
            quantity,
            product_id,
          }: myOrderProductType) => {
            const priceComma = price?.toLocaleString();
            const totalPrice = price * quantity;
            const totalPriceComma = totalPrice.toLocaleString();
            return (
              <MyPageListBox key={_id}>
                <div className="padding">
                  <MyPageImgBox
                    onClick={() => navigate(`/product/${product_id}`)}
                  >
                    <MyPageImg src={src} />
                  </MyPageImgBox>
                  <MyPageContentBox>
                    <span className="text">{name}</span>
                    <span className="text">{priceComma}원</span>
                  </MyPageContentBox>
                  <MyPageTotalBox>
                    <span className="text">주문 개수 {quantity}개</span>
                    <span className="text">주문금액 {totalPriceComma}원</span>
                  </MyPageTotalBox>
                </div>
              </MyPageListBox>
            );
          }
        )}
      </MyPageListSection>
    </MyPageListComponent>
  );
};

const MyPageListComponent = styled.div`
  max-width: 1080px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12%;
`;

const MyPageListHeader = styled.div`
  margin-bottom: 15px;
  .title {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    text-align: left;
  }
`;

const MyPageListSection = styled.section`
  border-top: 2px solid #1a1a1a;
`;

const MyPageListBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  .padding {
    display: flex;
    padding: 25px 0;
  }
`;

const MyPageImgBox = styled.div`
  width: 30%;
  height: 200px;
  padding: 0 0 0 24px;
`;

const MyPageImg = styled.img`
  width: 100%;
  height: 100%;
`;

const MyPageContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 3%;
  .text {
    font-weight: 600;
    margin-bottom: 4%;
  }
`;

const MyPageTotalBox = styled.div`
  width: 40%;
  ${({ theme }) => theme.flexMixIn("flex-end", "flex-end")};
  flex-direction: column;
  .text {
    font-weight: bold;
    margin: 0 8% 4% 0;
  }
`;

export default MyPageList;
