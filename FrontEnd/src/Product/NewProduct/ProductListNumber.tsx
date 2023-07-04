import styled from "styled-components";

interface NewproductProps {
  totalPageNumber: number[];
  queryNavigate: (pageNumber: number) => void;
  currentPageNumber: number;
}

const ProductListNumber = ({
  totalPageNumber,
  queryNavigate,
  currentPageNumber,
}: NewproductProps) => {
  return (
    <ProductListNumberBox>
      <div>
        {totalPageNumber?.map((pageNumber, index) => {
          if (currentPageNumber === pageNumber) {
            return (
              <OnProductNumber
                onClick={() => queryNavigate(pageNumber)}
                key={index}
              >
                {pageNumber}
              </OnProductNumber>
            );
          } else {
            return (
              <ProductNumber
                onClick={() => queryNavigate(pageNumber)}
                key={index}
              >
                {pageNumber}
              </ProductNumber>
            );
          }
        })}
      </div>
    </ProductListNumberBox>
  );
};

const ProductListNumberBox = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  margin: 60px 0 0 0;
  text-align: center;
`;

const ProductNumber = styled.div`
  display: inline-block;
  width: 40px;
  padding: 12px 0;
  font-size: 16px;
  color: #6d6d6d;
  border: 1px solid #e5e5e5;
  background: #fff;
  cursor: pointer;
`;

const OnProductNumber = styled(ProductNumber)`
  color: #000;
  border-color: #000;
`;

export default ProductListNumber;
