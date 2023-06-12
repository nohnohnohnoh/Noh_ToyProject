import React from "react";
import { useSelector } from "react-redux";
import { RootState, persistor } from "../../store";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsBasket, BsPerson } from "react-icons/bs";

const Nav = () => {
  const localStorageToken = localStorage.getItem("auth_token");
  const navigate = useNavigate();
  const nickName = useSelector(
    ({ auth }: RootState) => auth.authData?.data.nickName
  );
  console.log("user:", nickName);
  const navigateMain = () => {
    navigate("/");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateCreate = () => {
    navigate("/create");
  };

  const logOut = async () => {
    localStorage.clear();
    await persistor.purge();
    window.location.reload();
  };

  return (
    <NavComponents>
      <NavComponentsSection>
        <NavFirstList>
          {localStorageToken ? (
            <NavCreate>환영합니다 {nickName}님</NavCreate>
          ) : (
            <NavCreate onClick={navigateCreate}>회원가입</NavCreate>
          )}
          {localStorageToken ? (
            <NavLogin onClick={logOut}>로그아웃</NavLogin>
          ) : (
            <NavLogin onClick={navigateLogin}>로그인</NavLogin>
          )}
          <NavOrder>주문조회</NavOrder>
          <NavProduct>최근본상품</NavProduct>
          <NavClient>고객센터</NavClient>
        </NavFirstList>
        <NavSecondList>
          <NavHeaderLogo onClick={navigateMain}>THE DAJU</NavHeaderLogo>
          <NavMenu>
            <NavMenuUl>
              <NavMenuLi>추천 상품</NavMenuLi>
              <NavMenuLi>신제품</NavMenuLi>
              <NavMenuLi>잔/컵</NavMenuLi>
              <NavMenuLi>접시/볼</NavMenuLi>
              <NavMenuLi>수저/커트러리</NavMenuLi>
              <NavMenuLi>조리도구/기타주방잡화</NavMenuLi>
              <NavMenuLi>재질</NavMenuLi>
              <NavMenuLi>브랜드</NavMenuLi>
            </NavMenuUl>
          </NavMenu>
          <NavMyPage>
            <SearchIcon />
            <MyPageIcon />
            <ProductIcon />
          </NavMyPage>
        </NavSecondList>
      </NavComponentsSection>
    </NavComponents>
  );
};

const NavComponents = styled.nav`
  width: 100vw;
  border-bottom: 1px solid #e8e8e8;
`;

const NavComponentsSection = styled.div`
  margin: 1% 2% 0 2%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NavFirstList = styled.div`
  width: 100%;
  margin-top: 1%;
  ${({ theme }) => theme.flexMixIn("flex-end", "center")}
`;

const NavCreate = styled.div`
  padding: 0 0.5% 0 0.5%;
  color: #6a6a6a;
  font-size: 12px;
  border-right: 0.5px solid #6a6a6a;
  cursor: pointer;
  &:hover {
    color: #1a1a1a;
  }
`;

const NavLogin = styled(NavCreate)``;

const NavOrder = styled(NavCreate)``;

const NavProduct = styled(NavCreate)``;

const NavClient = styled(NavCreate)`
  border: none;
`;

const NavSecondList = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexMixIn("center", "center")}
  flex-wrap: wrap;
  position: relative;
  margin-top: 1.5%;
`;

const NavHeaderLogo = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;

const NavMenu = styled.div`
  width: 100%;
  margin: 1.5%;
  position: relative;
`;

const NavMenuUl = styled.ul`
  ${({ theme }) => theme.flexMixIn("center", "center")}
  flex-wrap: wrap;
  margin: 0 2%;
`;

const NavMenuLi = styled.li`
  ${({ theme }) => theme.flexMixIn("", "center")}
  padding: 0 2%;
  font-size: 14px;
  font-weight: 600;
  color: #3a3a3a;
  cursor: pointer;
`;

const NavMyPage = styled.div`
  width: 10%;
  ${({ theme }) => theme.flexMixIn("center", "center")}
  ${({ theme }) => theme.postionMixIn("absolute", 60, -0.25)};
`;
const SearchIcon = styled(BsSearch)`
  font-size: 25px;
  margin: 0 7.5%;
  cursor: pointer;
`;
const MyPageIcon = styled(BsPerson)`
  font-size: 25px;
  margin: 0 7.5%;
  cursor: pointer;
`;
const ProductIcon = styled(BsBasket)`
  font-size: 25px;
  margin: 0 7.5%;
  cursor: pointer;
`;
export default Nav;
