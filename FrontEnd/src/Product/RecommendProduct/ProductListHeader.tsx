import styled from "styled-components";

interface RecommendProductProps {
  totalData: number | undefined;
  onChangeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currentPageString: string | null;
}

const ProductListHeader = ({
  totalData,
  onChangeSelect,
  currentPageString,
}: RecommendProductProps) => {
  return (
    <ProdcutListHeader>
      <ProdcutListTotal>
        총 <strong className="dataCount">{totalData}</strong>개의 상품이
        있습니다.
      </ProdcutListTotal>
      <div>
        <ProductSortSelect onChange={onChangeSelect}>
          {currentPageString === null && (
            <>
              <option value="신상품">신상품</option>
              <option value="상품명">상품명</option>
              <option value="낮은가격">낮은가격</option>
              <option value="높은가격">높은가격</option>
            </>
          )}
          {currentPageString === "신상품" && (
            <>
              <option value="신상품">신상품</option>
              <option value="상품명">상품명</option>
              <option value="낮은가격">낮은가격</option>
              <option value="높은가격">높은가격</option>
            </>
          )}
          {currentPageString === "상품명" && (
            <>
              <option value="상품명">상품명</option>
              <option value="신상품">신상품</option>
              <option value="낮은가격">낮은가격</option>
              <option value="높은가격">높은가격</option>
            </>
          )}
          {currentPageString === "낮은가격" && (
            <>
              <option value="낮은가격">낮은가격</option>
              <option value="상품명">상품명</option>
              <option value="신상품">신상품</option>
              <option value="높은가격">높은가격</option>
            </>
          )}
          {currentPageString === "높은가격" && (
            <>
              <option value="높은가격">높은가격</option>
              <option value="상품명">상품명</option>
              <option value="신상품">신상품</option>
              <option value="낮은가격">낮은가격</option>
            </>
          )}
        </ProductSortSelect>
      </div>
    </ProdcutListHeader>
  );
};

const ProdcutListHeader = styled.div`
  margin: 0;
  padding: 0 0 20px;
  border-top: 0;
  border-bottom: 1px solid #ebebeb;
  overflow: hidden;
  text-align: right;
  line-height: 38px;
  ${({ theme }) => theme.media.desktop`
      padding: 0 0 5px;
  `}
`;

const ProdcutListTotal = styled.div`
  float: left;
  color: #7d7d7d;
  .dataCount {
    font-weight: bold;
    color: black;
  }
  ${({ theme }) => theme.media.desktop`
     font-size: 13px;
  `}
`;

const ProductSortSelect = styled.select`
  max-width: 100%;
  height: 40px;
  padding: 0 30px 0 15px;
  font-size: 13px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  background: #fff
    url(//img.echosting.cafe24.com/skin/skin/common/ico_select.png) no-repeat
    right 10px center;
  background-size: 14px 8px;
  -webkit-appearance: none;
  appearance: none;
`;

export default ProductListHeader;
