import { useCallback, useEffect, useState } from "react";
import MyPageHeader from "./MyPageHeader";
import MyPageUser from "./MyPageUser";
import MyPageList from "./MyPageList";
import { getMyOrderProduct } from "../api/ProductOrder";
import { useNavigate } from "react-router-dom";
import { myOrderProductType } from "../types/type";
import styled from "styled-components";

const MyPage = () => {
  const [orderProduct, setOrderProduct] = useState<myOrderProductType[]>([]);

  const navigate = useNavigate();

  const myOrderProductAxios = useCallback(async () => {
    const data = await getMyOrderProduct();
    return data;
  }, []);

  useEffect(() => {
    myOrderProductAxios().then(({ myOrders }) => {
      setOrderProduct(myOrders);
    });
  }, [myOrderProductAxios]);

  const navigateMain = () => {
    navigate("/");
  };

  return (
    <MypageComponent>
      <MyPageHeader navigateMain={navigateMain} />
      <MyPageUser orderProduct={orderProduct} />
      <MyPageList orderProduct={orderProduct} />
    </MypageComponent>
  );
};

const MypageComponent = styled.div`
  width: 100%;
  zoom: 1;
  position: relative;
  margin: 0 auto;
`;

export default MyPage;
