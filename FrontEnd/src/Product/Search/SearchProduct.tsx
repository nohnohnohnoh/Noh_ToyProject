import SearchProductLayOut from "../Search/SearchProductLayOut";
import styled from "styled-components";

interface TitleProps {
  title: string;
}

const SearchProduct = ({ title }: TitleProps) => {
  return (
    <SearchProductLayOut title={title}>
      <SearchProductResult>
        <p className="record">
          상품 검색 결과
          <strong className="result">100</strong>
        </p>
      </SearchProductResult>
    </SearchProductLayOut>
  );
};

const SearchProductResult = styled.div`
  padding: 40px 0 0;
  overflow: hidden;
  border-top: 1px solid #e0e0e0;
  text-align: right;
  line-height: 38px;
  .record {
    float: left;
    color: #7d7d7d;
  }
  .result {
    display: inline-block;
    margin-left: 8px;
    color: #000;
    font-weight: bold;
  }
`;

export default SearchProduct;
