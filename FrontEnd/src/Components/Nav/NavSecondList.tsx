import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setProductType, setToggleSearch } from "../../reducers/productSlice";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsBasket, BsPerson, BsHeart } from "react-icons/bs";
import styled from "styled-components";

const NavSecondList = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const localStorageToken = localStorage.getItem("AUTH_TOKEN");

  const navigateMain = () => {
    navigate("/");
  };

  const navigateRecommendProduct = () => {
    navigate("/product?page=1&limit=8");
    dispatch(setProductType({ productType: "추천상품" }));
  };

  const navigateNewProdcut = () => {
    navigate("/product?page=1&limit=16");
    dispatch(setProductType({ productType: "신제품" }));
  };

  const navigateSearch = () => {
    dispatch(setToggleSearch({ toggleSearch: true }));
  };

  const navigateMyPage = () => {
    if (localStorageToken) {
      navigate("/mypage");
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };

  const navigateCart = () => {
    if (localStorageToken) {
      navigate("/cart");
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };

  const navigateWishList = () => {
    if (localStorageToken) {
      navigate("/wishlist?page=1&limit=4");
    } else {
      alert("로그인 후 이용 가능합니다.");
    }
  };

  return (
    <NavSecondListSection>
      <NavHeaderLogo onClick={navigateMain}>THE DAJU</NavHeaderLogo>
      <NavMenu>
        <NavMenuUl>
          <NavMenuLi onClick={navigateRecommendProduct}>추천 상품</NavMenuLi>
          <NavMenuLi onClick={navigateNewProdcut}>신제품</NavMenuLi>
          <NavMenuLi>잔/컵</NavMenuLi>
          <NavMenuLi>접시/볼</NavMenuLi>
          <NavMenuLi>수저/커트러리</NavMenuLi>
          <NavMenuLi>조리도구/기타주방잡화</NavMenuLi>
          <NavMenuLi>재질</NavMenuLi>
          <NavMenuLi>브랜드</NavMenuLi>
        </NavMenuUl>
      </NavMenu>
      <NavMyPage>
        <SearchIcon onClick={navigateSearch} />
        <MyPageIcon onClick={navigateMyPage} />
        <ProductIcon onClick={navigateCart} />
        <WishLIstIcon onClick={navigateWishList} />
      </NavMyPage>
    </NavSecondListSection>
  );
};

const NavSecondListSection = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")}
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

const NavHeaderLogo = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

const NavMenu = styled.div`
  position: relative;
  width: 100%;
  margin: 1.5%;
`;

const NavMenuUl = styled.ul`
  ${({ theme }) => theme.flexMixIn("center", "center")}
  flex-wrap: wrap;
  margin: 0 2%;
`;

const NavMenuLi = styled.li`
  ${({ theme }) => theme.flexMixIn("", "center")};
  padding: 0 2%;
  font-size: 14px;
  font-weight: 600;
  color: #3a3a3a;
  cursor: pointer;
`;

const NavMyPage = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")}
  ${({ theme }) => theme.positionMixIn("absolute", 60, -0.25)};
  width: 10%;
`;
const SearchIcon = styled(BsSearch)`
  margin: 0 5%;
  font-size: 20px;
  cursor: pointer;
`;
const MyPageIcon = styled(BsPerson)`
  margin: 0 5%;
  font-size: 25px;
  cursor: pointer;
`;
const ProductIcon = styled(BsBasket)`
  margin: 0 5%;
  font-size: 20px;
  cursor: pointer;
`;

const WishLIstIcon = styled(BsHeart)`
  margin: 0 5%;
  font-size: 20px;
  cursor: pointer;
`;

export default NavSecondList;
