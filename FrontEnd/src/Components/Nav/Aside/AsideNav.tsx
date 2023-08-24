import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { setProductType } from "../../../reducers/productSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AsideNav = ({ setToggleAside }: any) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const navigateRecommendProduct = () => {
    navigate("/product?page=1&limit=8");
    dispatch(setProductType({ productType: "추천상품" }));
    setToggleAside(false);
  };

  const navigateNewProdcut = () => {
    navigate("/product?page=1&limit=16");
    dispatch(setProductType({ productType: "신제품" }));
    setToggleAside(false);
  };

  const navigatePreparing = () => {
    alert("준비 중에 있는 서비스 입니다.");
  };

  return (
    <AsideNavComponent>
      <div>
        <ul>
          <AsideNavMenuLi onClick={navigateRecommendProduct}>
            추천상품
          </AsideNavMenuLi>
          <AsideNavMenuLi onClick={navigateNewProdcut}>신제품</AsideNavMenuLi>
          <AsideNavMenuLi onClick={navigatePreparing}>잔/컵</AsideNavMenuLi>
          <AsideNavMenuLi onClick={navigatePreparing}>접시/볼</AsideNavMenuLi>
          <AsideNavMenuLi onClick={navigatePreparing}>
            수저/커트러리
          </AsideNavMenuLi>
          <AsideNavMenuLi onClick={navigatePreparing}>
            조리도구/기타주방잡화
          </AsideNavMenuLi>
          <AsideNavMenuLi onClick={navigatePreparing}>재질</AsideNavMenuLi>
          <AsideNavMenuLi onClick={navigatePreparing}>브랜드</AsideNavMenuLi>
          <AsideNavMenuLi onClick={navigatePreparing}>기타</AsideNavMenuLi>
        </ul>
        <AsideLine />
        <AsideTitleText onClick={navigatePreparing}>고객센터</AsideTitleText>
      </div>
    </AsideNavComponent>
  );
};

const AsideNavComponent = styled.nav`
  padding: 30px 4%;
`;

const AsideNavMenuLi = styled.li`
  font-size: 16px;
  margin: 10px 0;
  padding: 9px 0;
  color: #1a1a1a;
`;

const AsideLine = styled.div`
  margin: 40px 0 35px;
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
`;

const AsideTitleText = styled.div`
  font-size: 18px;
  line-height: 35px;
  height: 35px;
  font-weight: 400;
  color: #1a1a1a;
`;

export default AsideNav;
