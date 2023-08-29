import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, persistor } from "../../store";
import { setToggleAside } from "../../reducers/productSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AsideHeaderUser = () => {
  const localStorageToken = localStorage.getItem("AUTH_TOKEN");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const nickName = useSelector(
    ({ auth }: RootState) => auth.authData?.data.nickName
  );

  const navigateLogin = () => {
    navigate("/login");
    dispatch(setToggleAside({ toggleAside: false }));
  };

  const navigateCreate = () => {
    navigate("/create");
    dispatch(setToggleAside({ toggleAside: false }));
  };

  const navigateMypage = () => {
    navigate("/mypage");
    dispatch(setToggleAside({ toggleAside: false }));
  };

  const navigateCart = () => {
    navigate("/cart");
    dispatch(setToggleAside({ toggleAside: false }));
  };

  const navigateWishList = () => {
    navigate("/wishlist");
    dispatch(setToggleAside({ toggleAside: false }));
  };

  const navigatePreparing = () => {
    alert("준비 중에 있는 서비스 입니다.");
  };

  const logOut = async () => {
    localStorage.clear();
    await persistor.purge();
    navigate("/");
  };

  return (
    <>
      <AsideHeaderUserComponent>
        {localStorageToken ? (
          <AsideHeaderUserText>환영합니다 {nickName}님</AsideHeaderUserText>
        ) : (
          <AsideHeaderUserText onClick={navigateCreate}>
            회원가입
          </AsideHeaderUserText>
        )}
        {localStorageToken ? (
          <AsideHeaderUserText onClick={logOut}>로그아웃</AsideHeaderUserText>
        ) : (
          <AsideHeaderUserText onClick={navigateLogin}>
            로그인
          </AsideHeaderUserText>
        )}
        <AsideHeaderUserText onClick={navigatePreparing}>
          주문조회
        </AsideHeaderUserText>
        <AsideHeaderUserText onClick={navigatePreparing}>
          최근본상품
        </AsideHeaderUserText>
      </AsideHeaderUserComponent>
      {localStorageToken && (
        <AsideHeaderUserToken>
          <AsideHeaderUserText onClick={navigateMypage}>
            마이페이지
          </AsideHeaderUserText>
          <AsideHeaderUserText onClick={navigateCart}>
            장바구니
          </AsideHeaderUserText>
          <AsideHeaderUserText onClick={navigateWishList}>
            위시리스트
          </AsideHeaderUserText>
        </AsideHeaderUserToken>
      )}
    </>
  );
};

const AsideHeaderUserComponent = styled.div`
  margin: 23px auto 0;
  ${({ theme }) => theme.flexMixIn("center", "wrap")}
`;

const AsideHeaderUserToken = styled.div`
  margin: 5px auto 0;
  ${({ theme }) => theme.flexMixIn("center", "wrap")}
  ${({ theme }) => theme.media.mobile`
  margin: 3px auto 0;
  `}
`;

const AsideHeaderUserText = styled.div`
  font-size: 13px;
  line-height: 1;
  color: #1a1a1a;
  ${({ theme }) => theme.flexMixIn("", "center")}
  white-space: nowrap;
  padding: 0 5px 5px 5px;
  cursor: pointer;
  ${({ theme }) => theme.media.mobile`
  font-size: 11px;
  `}
`;

export default AsideHeaderUser;
