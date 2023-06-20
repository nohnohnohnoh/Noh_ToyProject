import React, { useEffect, useState } from "react";
import ProdcutLayOut from "./ProductLayOut";
import { newProduct } from "../api/Prodcut";
import { ProductType } from "../types/type";
import styled from "styled-components";

interface TitleProps {
  title: string;
}

const Newproduct = ({ title }: TitleProps) => {
  const [newData, setNewData] = useState<Array<ProductType>>();

  const dataCount = newData?.length;

  useEffect(() => {
    newProduct().then(({ newProducts }) => {
      console.log(newProducts);
      setNewData(newProducts);
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
        {newData?.map(({ _id, src, name, price }) => {
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
      <ProductListNumberBox>
        <ProductListNumber>
          <ProductNumber>1</ProductNumber>
          <ProductNumber>2</ProductNumber>
          <ProductNumber>3</ProductNumber>
          <ProductNumber>4</ProductNumber>
          <ProductNumber>5</ProductNumber>
        </ProductListNumber>
      </ProductListNumberBox>
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

const ProductListNumberBox = styled.div`
  margin: 60px 0 0 0;
  text-align: center;
`;

const ProductListNumber = styled.div``;

const ProductNumber = styled.div`
  display: inline-block;
  width: 40px;
  padding: 12px 0;
  font-size: 16px;
  color: #6d6d6d;
  border: 1px solid #e5e5e5;
  background: #fff;
`;

export default Newproduct;
