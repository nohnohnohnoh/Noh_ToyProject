import { useState } from "react";
import {
  deleteWishListProduct,
  patchSelectProduct,
  getWishListProduct,
} from "../api/WishList";
import WishListModal from "./WishListModal/WishListModal";
import { useNavigate } from "react-router-dom";
import { WishListProductType } from "../types/type";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

interface WishListProps {
  wishListData: WishListProductType[];
  setWishListData: (data: WishListProductType[]) => void;
}

const WishListSection = ({ wishListData, setWishListData }: WishListProps) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState();

  const navigate = useNavigate();

  const onClickOneDelete = (_id: string) => {
    if (window.confirm("정말 삭제하시겠습니까 ?") === true) {
      deleteWishListProduct(_id, "");
      alert("삭제가 완료되었습니다.");
      navigate("/wishlist?page=1&limit=4");
    } else return;
  };

  const handleSingleCheck = (checked: any, _id: string) => {
    if (checked) {
      patchSelectProduct(_id, true).then((data) => {
        setWishListData(data.wishList);
      });
    } else {
      patchSelectProduct(_id, false).then((data) => {
        setWishListData(data.wishList);
      });
    }
  };

  const onToggleModal = (_id: string) => {
    setToggleModal(true);
    getWishListProduct(`?wishListId=${_id}`).then(({ wishList }) =>
      setModalData(wishList)
    );
  };

  return (
    <WishList>
      <WishListHeader>
        <h3 className="title">나의 위시리스트</h3>
      </WishListHeader>
      <WishListSectionComponent>
        {wishListData.map(({ _id, src, name, price, product_id }, index) => {
          const priceComma = price?.toLocaleString();
          return (
            <WishListBox key={_id}>
              <Check>
                <CheckIcon
                  type="checkbox"
                  onChange={(e) => handleSingleCheck(e.target.checked, _id)}
                  checked={wishListData[index].select === true ? true : false}
                />
              </Check>
              <WishListImgBox
                onClick={() => navigate(`/product/${product_id}`)}
              >
                <WishListImg src={src} />
              </WishListImgBox>
              <WishListContentBox>
                <span className="text">{name}</span>
                <span className="text">{priceComma}원</span>
              </WishListContentBox>
              <WishListButtonBox>
                <Delete onClick={() => onClickOneDelete(_id)} />
                <CartButton onClick={() => onToggleModal(_id)}>
                  장바구니
                </CartButton>
                <OrderButton onClick={() => onToggleModal(_id)}>
                  주문하기
                </OrderButton>
              </WishListButtonBox>
            </WishListBox>
          );
        })}
        <WishListModal
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          modalData={modalData}
          setWishListData={setWishListData}
        />
      </WishListSectionComponent>
    </WishList>
  );
};

const WishList = styled.div`
  max-width: 1080px;
  width: 92%;
  margin: 4% auto 0;
`;

const WishListHeader = styled.div`
  margin-bottom: 15px;
  .title {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    text-align: left;
  }
`;

const WishListSectionComponent = styled.section`
  border-top: 2px solid #1a1a1a;
`;

const WishListBox = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid #ddd;
  padding: 25px 0;
`;

const Check = styled.span`
  display: inline-block;
  margin: 0 10px 0 0;
`;

const CheckIcon = styled.input`
  width: 24px;
  height: 24px;
  border: 1px solid #d9d9d9;
  background: url("https://thedaju.cafe24.com/SkinImg/img/checkbox_off.svg")
    no-repeat center;
  transition: none;
  appearance: none;
  cursor: pointer;
  &:checked {
    background: url("https://thedaju.cafe24.com/SkinImg/img/checkbox_on.svg")
      no-repeat center;
  }
`;

const WishListImgBox = styled.div`
  width: 30%;
  height: 200px;
  padding: 0 0 0 24px;
`;

const WishListImg = styled.img`
  width: 100%;
  height: 100%;
`;

const WishListContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 3%;
  .text {
    font-weight: 600;
    margin-bottom: 4%;
  }
`;

const Delete = styled(AiOutlineClose)`
  position: absolute;
  right: -4%;
  width: 12%;
  height: 12%;
  color: #b5b5b5;
`;

const WishListButtonBox = styled.div`
  width: 40%;
`;

const CartButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #d6d6d6;
  outline: none;
  background: #fff;
  color: #000;
  position: absolute;
  right: 9%;
  bottom: 10%;
`;

const OrderButton = styled(CartButton)`
  border: 1px solid #1a1a1a;
  background: #1a1a1a;
  color: #fff;
  font-weight: bold;
  right: 0%;
`;
export default WishListSection;
