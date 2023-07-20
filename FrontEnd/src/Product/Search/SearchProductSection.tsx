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
  width: 22.8%;
  margin: 0 10px 60px 10px;
  ${({ theme }) => theme.media.desktop`
    width: 30.8%;
  `}
`;

const ProductListImgBox = styled.div`
  width: 100%;
  height: 260px;
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

export default SearchProductSection;
