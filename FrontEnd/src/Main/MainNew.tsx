import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { setProductType } from "../reducers/productSlice";
import { mainNewProduct } from "../api/Prodcut";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../types/type";
import styled from "styled-components";

const MainNew = () => {
  const [mainNewData, setMainNewData] = useState<Array<ProductType>>([]);
  const [totalPage, setTotalPage] = useState();

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const mainNewProductAxios = useCallback(async () => {
    const data = await mainNewProduct("");
    return data;
  }, []);

  useEffect(() => {
    mainNewProductAxios().then(({ newProducts, totalPage }) => {
      setMainNewData(newProducts);
      setTotalPage(totalPage);
    });
  }, [mainNewProductAxios]);

  const paginationOnClick = () => {
    if (mainNewData.length === 0) return;
    const lastImgArr: ProductType = mainNewData[mainNewData.length - 1];
    const lastImgId = lastImgArr._id;
    mainNewProduct(`?lastid=${lastImgId}`).then(({ newProducts }) => {
      setMainNewData((prevData) => [...prevData, ...newProducts]);
    });
  };

  const currentPage = Math.ceil(mainNewData.length / 8);

  return (
    <MainNewComponent>
      <MainNewSection>
        <MainNewHeaderBox>
          <MainNewLogo>NEW! ARRIVALS</MainNewLogo>
          <MainNewText>언제나 새로운 신상품</MainNewText>
        </MainNewHeaderBox>
        <MainNewList>
          {mainNewData?.map(({ _id, src, name, price }: ProductType) => {
            const priceComma = price?.toLocaleString();
            return (
              <MainNewListBox
                onClick={() => {
                  navigate(`/product/${_id}`);
                  dispatch(setProductType({ productType: "신제품" }));
                }}
                key={_id}
              >
                <MainNewImgBox>
                  <MainNewImg src={src} />
                </MainNewImgBox>
                <MainNewTextBox>
                  <MainNewName>{name}</MainNewName>
                  <MainNewPrice>{priceComma}원</MainNewPrice>
                </MainNewTextBox>
              </MainNewListBox>
            );
          })}
        </MainNewList>
        <MainButtonBox>
          <NewButton onClick={paginationOnClick}>
            상품 더보기({currentPage}/{totalPage})
          </NewButton>
        </MainButtonBox>
      </MainNewSection>
    </MainNewComponent>
  );
};

const MainNewComponent = styled.div`
  width: 100vw;
  margin-bottom: 8%;
`;

const MainNewSection = styled.section`
  max-width: 1230px;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
`;

const MainNewHeaderBox = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const MainNewLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  color: #3a3a3a;
`;

const MainNewText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: #9a9a9a;
  margin-top: 15px;
`;

const MainNewList = styled.div`
  margin: 22px 0 0;
  text-align: left;
`;

const MainNewListBox = styled.div`
  display: inline-block;
  width: 22%;
  margin: 0 10px 60px 10px;
  ${({ theme }) => theme.media.desktop`
    width: 30%;
  `}
  ${({ theme }) => theme.media.tablet`
    width: 46.5%;
  `}
  @media screen and (max-width: 650px) {
    width: 46%;
  }
  @media screen and (max-width: 600px) {
    width: 45.5%;
  }
  @media screen and (max-width: 500px) {
    width: 44.5%;
  }
  @media screen and (max-width: 400px) {
    width: 42.5%;
  }
  @media screen and (max-width: 300px) {
    width: 40.5%;
  }
`;

const MainNewImgBox = styled.div`
  width: 100%;
  height: 280px;
  margin: 0 0 10px;
  text-align: center;
  @media screen and (max-width: 1100px) {
    height: 240px;
  }
  ${({ theme }) => theme.media.desktop`
  height: 260px;
  `}
  ${({ theme }) => theme.media.tablet`
  height: 240px;
  `}
  @media screen and (max-width: 540px) {
    height: 220px;
  }
  @media screen and (max-width: 470px) {
    height: 200px;
  }
  @media screen and (max-width: 400px) {
    height: 180px;
  }
  @media screen and (max-width: 330px) {
    height: 160px;
  }
  ${({ theme }) => theme.media.mobile`
  height: 140px;
  `}
`;

const MainNewImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const MainNewTextBox = styled.div`
  margin: 20px 20px 0 0;
  padding: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  white-space: normal;
`;

const MainNewName = styled.div`
  font-size: 13px;
  color: #555555;
`;

const MainNewPrice = styled.div`
  margin: 10px 0 5px 0;
  font-size: 12px;
  color: #003852;
  font-weight: bold;
`;

const MainButtonBox = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  text-align: center;
`;

const NewButton = styled.div`
  display: inline-block;
  min-width: auto;
  padding: 21px 75px 22px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #999999;
  text-align: center;
  transition: all 400ms;
  background-color: #fff;
  color: #1a1a1a;
  cursor: pointer;
`;

export default MainNew;
