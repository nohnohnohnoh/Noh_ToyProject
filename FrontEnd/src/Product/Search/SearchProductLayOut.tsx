import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { setProductSearch } from "../../reducers/productSlice";

interface SearchProps {
  title: string;
  children: React.ReactNode;
}

const SearchProductLayOut = ({ title, children }: SearchProps) => {
  const dispatch = useDispatch();
  const productSearch = useSelector(
    ({ product }: RootState) => product.productSearch
  );

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setProductSearch({ productSearch: value }));
    console.log(productSearch);
  };

  return (
    <SearchProductComponent>
      <SearchProductHeader>
        <SearchProductHeaderText>홈</SearchProductHeaderText>
        <SearchProductHeaderText>/</SearchProductHeaderText>
        <SearchProductHeaderTextBold className="boldText">
          {title}
        </SearchProductHeaderTextBold>
      </SearchProductHeader>
      <SearchProductTitle>
        <SearchProductTitleText>{title}</SearchProductTitleText>
      </SearchProductTitle>
      <SearchProductForm>
        <SearchProductFieldset>
          <SearchInputBox>
            <SearchInput value={productSearch} onChange={onChangeSearch} />
            <SearchIcon />
          </SearchInputBox>
        </SearchProductFieldset>
      </SearchProductForm>
      <SearchDivBox>
        <SearchDiv />
      </SearchDivBox>
      <SearchSection>{children}</SearchSection>
    </SearchProductComponent>
  );
};

const SearchProductComponent = styled.div`
  width: 100%;
  zoom: 1;
  position: relative;
  margin: 0 auto;
`;

const SearchProductHeader = styled.div`
  ${({ theme }) => theme.flexMixIn("flex-end", "center")};
  padding: 2.5% 0 0 0;
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const SearchProductHeaderText = styled.div`
  font-size: 12px;
  color: #7d7d7d;
  padding: 0.25%;
  cursor: pointer;
`;

const SearchProductHeaderTextBold = styled(SearchProductHeaderText)`
  color: #000;
  font-weight: bold;
`;

const SearchProductTitle = styled.div`
  width: 92%;
  max-width: 1230px;
  margin: 55px auto 40px auto;
  text-align: center;
`;

const SearchProductTitleText = styled.h2`
  font-weight: 700;
  font-size: 30px;
  color: #1a1a1a;
`;

const SearchProductForm = styled.form`
  padding: 22px 0;
  margin: 0 0 42px;
`;

const SearchProductFieldset = styled.fieldset`
  position: relative;
  margin: 0 auto 10px;
  text-align: center;
`;

const SearchInputBox = styled.div`
  width: 650px;
  padding: 0 36px 0 0;
  position: relative;
  display: inline-block;
  border-bottom: 1px solid #000;
`;

const SearchInput = styled.input`
  border: 0;
  width: 100%;
  height: 54px;
  font-size: 18px;
  background: #fff;
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  bottom: 12px;
  right: 0;
  font-size: 24px;
`;

const SearchDivBox = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
`;

const SearchDiv = styled.div`
  max-width: 1230px;
  width: 92%;
  height: 73px;
  border: 0;
  border-top: 1px solid #111;
  border-bottom: 0.5px solid #eee;
`;

const SearchSection = styled.section`
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

export default SearchProductLayOut;
