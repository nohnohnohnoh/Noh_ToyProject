import { useState } from "react";
import DetailAreaButton from "./DetailAreaButton";
import { ProductType } from "../../types/type";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import styled from "styled-components";

const DetailAreaLayOut = ({ _id, src, name, price }: ProductType) => {
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseTotal = () => {
    setTotal(total + 1);
    if (price) {
      setTotalPrice(totalPrice + price);
    }
  };

  const decreaseTotal = () => {
    if (total > 0) setTotal(total + -1);
    if (price) {
      if (totalPrice >= price) {
        setTotalPrice(totalPrice - price);
      }
    }
  };

  const priceComma = price?.toLocaleString();
  const totalPriceComma = totalPrice?.toLocaleString();

  return (
    <DetailArea>
      <DetailImgBox>
        <DetailImg src={src} />
      </DetailImgBox>
      <DetailInfoArea>
        <DetailHead>{name}</DetailHead>
        <DetailContentTable>
          <tbody>
            <tr>
              <DetailContentTh>판매가</DetailContentTh>
              <DetailContentTd>{priceComma}원</DetailContentTd>
            </tr>
            <tr>
              <DetailContentTh>원산지</DetailContentTh>
              <DetailContentTd>한국</DetailContentTd>
            </tr>
          </tbody>
        </DetailContentTable>
        <TotalContent>
          <TotalText>수량</TotalText>
          <TotalBox>
            <Minus onClick={decreaseTotal} />
            {total > 0 ? <div>{total} 개</div> : <div>{total}</div>}
            <Plus onClick={increaseTotal} />
          </TotalBox>
        </TotalContent>
        <DetailGuideArea>(최소주문수량 1개 이상)</DetailGuideArea>
        <TotalPrice>
          <TotalText>Total</TotalText>
          <TotalText>{totalPriceComma}원</TotalText>
        </TotalPrice>
        <DetailAreaButton
          _id={_id}
          src={src}
          name={name}
          price={price}
          total={total}
        />
      </DetailInfoArea>
    </DetailArea>
  );
};

const DetailArea = styled.div`
  max-width: 1230px;
  width: 92%;
  margin: 0 auto 80px;
  padding: 30px 0 0 0;
`;

const DetailImgBox = styled.div`
  display: inline-block;
  width: calc(100% - 650px);
  height: 540px;
  ${({ theme }) => theme.media.desktop`
    height: 340px;
  `}
`;

const DetailImg = styled.img`
  display: block;
  position: relative;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const DetailInfoArea = styled.div`
  display: inline-block;
  width: 600px;
  margin: 0 0 0 50px;
  font-size: 13px;
  line-height: 1;
  vertical-align: top;
`;

const DetailHead = styled.div`
  margin-bottom: 15px;
  padding: 20px 0;
  border-top: 2px solid #000;
  font-size: 28px;
  font-weight: 400;
  line-height: 30px;
  vertical-align: middle;
`;

const DetailContentTable = styled.table`
  table-layout: fixed;
  border: 0;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 18px;
`;

const DetailContentTh = styled.th`
  width: 160px;
  padding: 7px 5px 6px 0;
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  font-weight: bold;
  color: #003852;
`;

const DetailContentTd = styled.td`
  padding: 7px 6px 8px 0;
  vertical-align: middle;
  font-size: 12px;
  font-weight: bold;
  color: #003852;
`;

const TotalContent = styled.div`
  ${({ theme }) => theme.flexMixIn("space-between")}
  padding: 27px 0 26px;
  font-size: 20px;
  border-top: 1px solid #e5e5e5;
  vertical-align: middle;
`;

const TotalBox = styled.div`
  ${({ theme }) => theme.flexMixIn("", "center")}
  font-weight: bold;
`;

const Plus = styled(AiOutlinePlusCircle)`
  font-size: 18px;
`;

const Minus = styled(AiOutlineMinusCircle)`
  font-size: 18px;
`;

const DetailGuideArea = styled.div`
  margin: 45px 0 15px 0;
  font-size: 13px;
  color: #9a9a9a;
`;

const TotalPrice = styled.div`
  ${({ theme }) => theme.flexMixIn("space-between")}
  padding: 27px 0 26px;
  font-size: 20px;
  border-top: 1px solid #e5e5e5;
  vertical-align: middle;
`;

const TotalText = styled.span`
  font-weight: bold;
`;

export default DetailAreaLayOut;
