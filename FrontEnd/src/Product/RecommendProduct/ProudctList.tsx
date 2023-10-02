import SkeletonComponent from "../../Components/Skeleton/Skeleton";
import LoadingSkeleton from "../../Components/Skeleton/LoadingSkeleton";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types/type";
import styled from "styled-components";

interface RecommendProps {
  loading: boolean;
  loadingMore: boolean;
  recommendData: ProductType[];
  observerTargetEl: any;
}

const ProductList = ({
  recommendData,
  loading,
  loadingMore,
  observerTargetEl,
}: RecommendProps) => {
  const navigate = useNavigate();
  return (
    <ProductListComponents>
      {!loading && <SkeletonComponent />}
      {recommendData?.map(({ _id, src, name, price }: ProductType) => {
        const priceComma = price?.toLocaleString();
        return (
          <ProductListBox
            onClick={() => {
              navigate(`/product/${_id}`);
            }}
            key={_id}
          >
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
      {loadingMore && <LoadingSkeleton />}
      <div ref={observerTargetEl} />
    </ProductListComponents>
  );
};

const ProductListComponents = styled.div`
  margin: 22px 0 0;
  text-align: left;
`;

const ProductListBox = styled.div`
  display: inline-block;
  width: 23%;
  margin: 0 10px 60px 10px;
  @media screen and (max-width: 1100px) {
    width: 22.5%;
  }
  ${({ theme }) => theme.media.desktop`
    width: 31%;
    margin: 0 10px 25px 10px;
  `}
  @media screen and (max-width: 932px) {
    width: 30.5%;
  }
  ${({ theme }) => theme.media.tablet`
    width: 47%;
  `}
  @media screen and (max-width: 725px) {
    width: 46.5%;
  }
  @media screen and (max-width: 620px) {
    width: 46%;
  }
  @media screen and (max-width: 589px) {
    width: 45.5%;
  }
  @media screen and (max-width: 482px) {
    width: 45%;
  }
  @media screen and (max-width: 435px) {
    width: 44.5%;
  }
  @media screen and (max-width: 395px) {
    width: 44%;
  }
  @media screen and (max-width: 362px) {
    width: 43.5%;
  }
  @media screen and (max-width: 334px) {
    width: 43%;
  }
  ${({ theme }) => theme.media.mobile`
    width: 42.5%;
  `}
  @media screen and (max-width: 289px) {
    width: 41.5%;
  }
`;

const ProductListImgBox = styled.div`
  width: 100%;
  height: 260px;
  margin: 0 0 10px;
  text-align: center;
  @media screen and (max-width: 1100px) {
    height: 230px;
  }
  ${({ theme }) => theme.media.desktop`
  height: 260px;
  `}
  @media screen and (max-width: 900px) {
    height: 220px;
  }
  ${({ theme }) => theme.media.tablet`
  height: 299px;
  `}
  @media screen and (max-width: 700px) {
    height: 270px;
  }
  @media screen and (max-width: 600px) {
    height: 220px;
  }
  @media screen and (max-width: 540px) {
    height: 205px;
  }
  @media screen and (max-width: 470px) {
    height: 175px;
  }
  @media screen and (max-width: 400px) {
    height: 148px;
  }
  @media screen and (max-width: 330px) {
    height: 118px;
  }
  ${({ theme }) => theme.media.mobile`
  height: 100px;
  `}
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
  ${({ theme }) => theme.media.desktop`
  margin: 0;
  `}
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

export default ProductList;
