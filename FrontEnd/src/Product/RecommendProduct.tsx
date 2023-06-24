import React, { useEffect, useState } from "react";
import ProdcutLayOut from "./ProductLayOut";
import { recommendProduct } from "../api/Prodcut";
import { ProductType } from "../types/type";
import styled from "styled-components";

interface TitleProps {
  title: string;
}

const RecommendProduct = ({ title }: TitleProps) => {
  const [recommendData, setRecommendData] = useState([]);

  const dataCount = recommendData?.length;

  useEffect(() => {
    recommendProduct().then(({ recommendProducts }) => {
      setRecommendData(recommendProducts);
    });
  }, []);

  return (
    <ProdcutLayOut title={title}>
      <ProdcutListHeader>
        <ProdcutListTotal>
          총 <strong className="dataCount">{dataCount}</strong>개의 상품이
          있습니다.
        </ProdcutListTotal>
      </ProdcutListHeader>
      <ProductList>
        {recommendData?.map(({ _id, src, name, price }: ProductType) => {
          const priceComma = price?.toLocaleString();
          return (
            <ProductListBox key={_id}>
              <ProductListImgBox>
                <ProductListImg src={src} />
              </ProductListImgBox>
              <ProductListTextBox>
                <ProductListName>{name}</ProductListName>
                <ProductListPrice>{priceComma}원</ProductListPrice>
              </ProductListTextBox>
            </ProductListBox>
          );
        })}
      </ProductList>
    </ProdcutLayOut>
  );
};

const ProdcutListHeader = styled.div`
  border-top: 0;
  padding: 0 0 20px;
  margin: 0;
  border-bottom: 1px solid #ebebeb;
`;

const ProdcutListTotal = styled.div`
  color: #7d7d7d;
  .dataCount {
    font-weight: bold;
    color: black;
  }
`;

const ProductList = styled.div`
  margin: 22px 0 0;
  text-align: left;
`;

const ProductListBox = styled.div`
  display: inline-block;
  width: 23%;
  margin: 0 10px 60px 10px;
`;

const ProductListImgBox = styled.div`
  width: 100%;
  height: 280px;
  margin: 0 0 10px;
  text-align: center;
`;

const ProductListImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const ProductListTextBox = styled.div`
  margin: 20px 20px 0 0;
  padding: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  white-space: normal;
`;

const ProductListName = styled.div`
  font-size: 13px;
  color: #555555;
`;

const ProductListPrice = styled.div`
  margin: 10px 0 5px 0;
  font-size: 12px;
  color: #003852;
  font-weight: bold;
`;
export default RecommendProduct;
