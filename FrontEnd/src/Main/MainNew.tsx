import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { setProductType } from "../reducers/productSlice";
import { mainNewProduct } from "../api/Prodcut";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ProductType } from "../types/type";

const MainNew = () => {
  const [mainNewData, setMainNewData] = useState<Array<ProductType>>([]);
  const [totalPage, setTotalPage] = useState();

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    mainNewProduct("").then(({ newProducts, totalPage }) => {
      setMainNewData(newProducts);
      setTotalPage(totalPage);
    });
  }, []);

  const paginationOnClick = () => {
    if (mainNewData.length === 0) return;
    const lastImgArr: ProductType = mainNewData[mainNewData.length - 1];
    const lastImgId = lastImgArr._id;
    console.log(lastImgId);
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
  width: 23%;
  margin: 0 10px 60px 10px;
`;

const MainNewImgBox = styled.div`
  width: 100%;
  height: 280px;
  margin: 0 0 10px;
  text-align: center;
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
  background-color: #fff;
  display: inline-block;
  min-width: auto;
  font-weight: 500;
  padding: 21px 75px 22px;
  border: 1px solid #999999;
  text-align: center;
  transition: all 400ms;
  font-size: 16px;
  color: #1a1a1a;
  cursor: pointer;
`;

export default MainNew;
