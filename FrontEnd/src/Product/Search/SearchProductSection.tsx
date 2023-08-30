import { useState, useRef, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { searchProduct } from "../../api/Prodcut";
import { ProductType } from "../../types/type";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchProductSection = () => {
  const productSearch = useSelector(
    ({ product }: RootState) => product.productSearch
  );

  const [searchProductData, setSearchProductData] = useState<ProductType[]>([]);
  const [totalData, setTotalData] = useState();
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const page = useRef<number>(1);
  const observerTargetEl = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const infiniteProduct = useCallback(async () => {
    await searchProduct(
      `?search=${productSearch}&page=${page.current}&limit=4` || location.search
    ).then((data) => {
      setSearchProductData((prevData: any) => [
        ...prevData,
        ...data.searchProduct,
      ]);
      setTotalData(data.totalProduct);
      setHasNextPage(data.searchProduct.length === 8);
      if (data.searchProduct.length) {
        page.current += 1;
      }
    });
  }, []);

  useEffect(() => {
    if (!observerTargetEl.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) infiniteProduct();
    });
    observer.observe(observerTargetEl.current);

    return () => {
      observer.disconnect();
    };
  }, [infiniteProduct]);

  return (
    <SearchSection>
      <SearchResult>
        <SearchRecord>
          상품 검색 결과
          <strong className="boldText">{totalData}</strong>
        </SearchRecord>
      </SearchResult>
      <ProductList>
        {searchProductData?.map(({ _id, src, name, price }: ProductType) => {
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
        <div ref={observerTargetEl} />
      </ProductList>
    </SearchSection>
  );
};

const SearchSection = styled.section`
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const SearchResult = styled.div`
  padding: 40px 0 0;
  overflow: hidden;
  border-top: 1px solid #e0e0e0;
  text-align: right;
  line-height: 38px;
  ${({ theme }) => theme.media.desktop`
     font-size: 13px;
  `}
`;

const SearchRecord = styled.p`
  float: left;
  color: #7d7d7d;
  .boldText {
    margin-left: 8px;
    color: #000;
    font-weight: bold;
  }
`;

const ProductList = styled.div`
  margin: 22px 0 0;
  text-align: left;
`;

const ProductListBox = styled.div`
  display: inline-block;
  width: 22.5%;
  margin: 0 10px 60px 10px;
  @media screen and (max-width: 1100px) {
    width: 22.5%;
  }
  ${({ theme }) => theme.media.desktop`
    width: 30.5%;
    margin: 0 10px 25px 10px;
  `}
  @media screen and (max-width: 932px) {
    width: 30%;
  }
  ${({ theme }) => theme.media.tablet`
    width: 45.5%;
  `}
  @media screen and (max-width: 725px) {
    width: 45%;
  }
  @media screen and (max-width: 620px) {
    width: 44.5%;
  }
  @media screen and (max-width: 589px) {
    width: 45%;
  }
  @media screen and (max-width: 482px) {
    width: 44.5%;
  }
  @media screen and (max-width: 435px) {
    width: 44%;
  }
  @media screen and (max-width: 395px) {
    width: 43.5%;
  }
  @media screen and (max-width: 362px) {
    width: 43%;
  }
  @media screen and (max-width: 334px) {
    width: 42.5%;
  }
  ${({ theme }) => theme.media.mobile`
    width: 42%;
  `}
  @media screen and (max-width: 289px) {
    width: 40.5%;
  }
`;

const ProductListImgBox = styled.div`
  width: 100%;
  height: 260px;
  margin: 0 0 10px;
  text-align: center;
  @media screen and (max-width: 1100px) {
    height: 210px;
  }
  ${({ theme }) => theme.media.desktop`
  height: 248px;
  `}
  @media screen and (max-width: 900px) {
    height: 210px;
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
  margin: 15px 0 0 0;
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

export default SearchProductSection;
