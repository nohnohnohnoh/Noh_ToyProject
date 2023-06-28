import React, { useState } from "react";
import styled from "styled-components";
import DetailAreaButton from "./DetailAreaButton";
import { ProductType } from "../../types/type";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

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
        <DetailAreaButton />
      </DetailInfoArea>
    </DetailArea>
  );
};

const DetailArea = styled.div`
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const DetailImgBox = styled.div`
  display: inline-block;
  width: calc(100% - 650px);
  height: 527px;
`;

const DetailImg = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;
  position: relative;
  max-width: 100%;
  height: 100%;
`;

const DetailInfoArea = styled.div`
  width: 600px;
  margin: 0 0 0 50px;
  display: inline-block;
  font-size: 13px;
  line-height: 1;
  vertical-align: top;
`;

const DetailHead = styled.div`
  border-top: 2px solid #000;
  padding: 20px 0;
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 400;
  line-height: 30px;
  vertical-align: middle;
`;

const DetailContentTable = styled.table`
  margin-top: 20px;
  table-layout: fixed;
  border: 0;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 18px;
`;

const DetailContentTh = styled.th`
  font-weight: normal;
  width: 160px;
  padding: 7px 5px 6px 0;
  text-align: left;
  vertical-align: top;
  font-size: 12px;
  color: #003852;
  font-weight: bold;
`;

const DetailContentTd = styled.td`
  padding: 7px 6px 8px 0;
  vertical-align: middle;
  font-size: 12px;
  color: #003852;
  font-weight: bold;
`;

const TotalContent = styled.div`
  padding: 27px 0 26px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  border-top: 1px solid #e5e5e5;
  vertical-align: middle;
`;

const TotalBox = styled.div`
  display: flex;
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
  padding: 27px 0 26px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  border-top: 1px solid #e5e5e5;
  vertical-align: middle;
`;

const TotalText = styled.span`
  font-weight: bold;
`;

export default DetailAreaLayOut;
