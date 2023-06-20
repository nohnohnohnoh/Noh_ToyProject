import React, { Children } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface ProdcutProps {
  title: string;
  children: React.ReactNode;
}

const ProdcutLayOut = ({ children, title }: ProdcutProps) => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <ProdcutComponent>
      <ProductHeader>
        <ProdcutHeaderText onClick={navigateHome}>홈</ProdcutHeaderText>
        <ProdcutHeaderText>/</ProdcutHeaderText>
        <ProdcutHeaderText>{title}</ProdcutHeaderText>
      </ProductHeader>
      <ProdcutTitle>
        <ProductTitleText>
          <div>{title}</div>
        </ProductTitleText>
      </ProdcutTitle>
      <ProductListSection>{children}</ProductListSection>
    </ProdcutComponent>
  );
};

const ProdcutComponent = styled.div`
  width: 100%;
  zoom: 1;
  position: relative;
  margin: 0 auto;
`;

const ProductHeader = styled.div`
  ${({ theme }) => theme.flexMixIn("flex-end", "center")};
  padding: 2.5% 0 0 0;
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const ProdcutHeaderText = styled.div`
  font-size: 12px;
  color: #7d7d7d;
  padding: 0.25%;
  cursor: pointer;
`;

const ProdcutTitle = styled.div`
  width: 92%;
  max-width: 1230px;
  margin: 0 auto 40px auto;
  padding: 45px 0 40px;
  text-align: center;
`;

const ProductTitleText = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #1a1a1a;
`;

const ProductListSection = styled.section`
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 120px;
`;
export default ProdcutLayOut;
