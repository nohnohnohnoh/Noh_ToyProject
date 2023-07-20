import { useState } from "react";
import WishListModalQuantity from "./ModalQuantity";
import WishListModalButton from "./WishListModalButton";
import { WishListProductType } from "../../types/type";
import { AiOutlineClose } from "react-icons/ai";
import styled, { css } from "styled-components";

interface WishListSecitonProps {
  toggleModal: boolean;
  setToggleModal: (toggle: boolean) => void;
  modalData: any;
  setWishListData: (data: WishListProductType[]) => void;
}

const WishListModal = ({
  toggleModal,
  setToggleModal,
  modalData,
  setWishListData,
}: WishListSecitonProps) => {
  const [quantityData, setQuantityData] = useState(0);
  const price = modalData?.price && modalData?.price * quantityData;
  const priceComma = price?.toLocaleString();

  const offToggleModal = () => {
    setToggleModal(false);
  };

  const plusQuantity = () => {
    setQuantityData(quantityData + 1);
  };

  const minusQuantity = () => {
    if (quantityData === 0) return alert("더 이상 수량을 줄일 수 없습니다.");
    setQuantityData(quantityData - 1);
  };

  return (
    <>
      <WishListModalComponent visible={toggleModal}>
        <WishListModalHeader>
          <CloseIcon onClick={offToggleModal} />
          <h2 className="title">옵션 선택</h2>
        </WishListModalHeader>
        <div>
          <WishListContentBox>
            <ImgBox>
              <Img src={modalData?.src} />
            </ImgBox>
            <ContentBox>
              <div className="text">{modalData?.name}</div>
              <div className="text">{modalData?.price}</div>
            </ContentBox>
          </WishListContentBox>
          <WishListModalQuantity
            quantityData={quantityData}
            plusQuantity={plusQuantity}
            minusQuantity={minusQuantity}
          />
          <TotalPrice>
            <strong className="title">
              TOTAL <span className="qty">(QUANTITY)</span>
            </strong>
            <span className="total">
              <strong>{priceComma}원</strong>
            </span>
          </TotalPrice>
        </div>
        <WishListModalButton
          _id={modalData?.product_id}
          src={modalData?.src}
          name={modalData?.name}
          price={modalData?.price}
          quantity={quantityData}
          setToggleModal={setToggleModal}
          setWishListData={setWishListData}
        />
      </WishListModalComponent>
      <BackGround visible={toggleModal} />
    </>
  );
};

const WishListModalComponent = styled.div<{ visible: boolean }>`
  z-index: 1001;
  position: relative;
  position: fixed;
  top: 0;
  bottom: 0;
  right: -80%;
  width: 30%;
  background-color: #fff;
  visibility: hidden;
  transition: 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
      right: 0;
    `}
  ${({ theme }) => theme.media.desktop`
    width: 35%;
  `}
`;

const WishListModalHeader = styled.div`
  position: relative;
  padding: 74px 16px 10px;
  margin: 0;
  border: 0;
  .title {
    font-size: 18px;
  }
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  ${({ theme }) => theme.media.desktop`
    width: 25px;
  height: 25px;
  `}
`;

const WishListContentBox = styled.div`
  position: relative;
  display: flex;
  margin: 30px 16px;
  min-height: 82px;
`;

const ImgBox = styled.div`
  width: 76px;
  height: 76px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentBox = styled.div`
  .text {
    margin: 4px 0 4px 4px;
    font-size: 14px;
    font-weight: bold;
  }
`;

const TotalPrice = styled.div`
  ${({ theme }) => theme.flexMixIn("space-between", "")};
  padding: 27px 16px 26px;
  font-size: 15px;
  border-top: 1px solid #e5e5e5;
  vertical-align: middle;
  background: #fff;
  .qty {
    color: #7d7d7d;
  }
`;

const BackGround = styled.div<{ visible: boolean }>`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export default WishListModal;
