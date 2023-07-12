import { useRef, useState } from "react";
import { deleteWishListProduct, patchSelectProduct } from "../api/WishList";
import { useNavigate } from "react-router-dom";
import { WishListProductType } from "../types/type";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

interface WishListProps {
  wishListData: WishListProductType[];
}

const WishListSection = ({ wishListData }: WishListProps) => {
  const [select, setSelect] = useState();
  const [Test, setTest] = useState(false);

  const navigate = useNavigate();

  console.log(select);

  const onClickOneDelete = (_id: string) => {
    if (window.confirm("정말 삭제하시겠습니까 ?") === true) {
      deleteWishListProduct(_id, "");
      alert("삭제가 완료되었습니다.");
      navigate("/wishlist?page=1&limit=4");
    } else return;
  };

  const onClickSelect = (_id: string, select: boolean) => {
    setTest(true);
    patchSelectProduct(_id, select).then(({ wishList }) => setSelect(wishList));
  };

  const testSelect = (_id: string, select: boolean) => {
    setTest(false);
    patchSelectProduct(_id, select).then(({ wishList }) => setSelect(wishList));
  };

  return (
    <WishList>
      <WishListHeader>
        <h3 className="title">나의 위시리스트</h3>
      </WishListHeader>
      <WishListSectionComponent>
        {wishListData.map(({ _id, src, name, price }, index) => {
          const priceComma = price?.toLocaleString();
          const test = wishListData[index].select;
          console.log(test);
          return (
            <WishListBox key={_id}>
              <div
                onClick={() => {
                  console.log(index);
                }}
              >
                test
              </div>
              <Check>
                {test !== false && (
                  <OnCheckIcon onClick={() => onClickSelect(_id, Test)} />
                )}
                {test === false && (
                  <OffCheckIcon onClick={() => testSelect(_id, Test)} />
                )}
              </Check>
              <WishListImgBox>
                <WishListImg src={src} />
              </WishListImgBox>
              <WishListContentBox>
                <span className="text">{name}</span>
                <span className="text">{priceComma}원</span>
              </WishListContentBox>
              <WishListButtonBox>
                <Delete onClick={() => onClickOneDelete(_id)} />
                <CartButton>장바구니</CartButton>
                <OrderButton>주문하기</OrderButton>
              </WishListButtonBox>
            </WishListBox>
          );
        })}
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

const OffCheckIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #d9d9d9;
  background: url("https://thedaju.cafe24.com/SkinImg/img/checkbox_off.svg")
    no-repeat center;
  transition: none;
  cursor: pointer;
`;

const OnCheckIcon = styled(OffCheckIcon)`
  background: url("https://thedaju.cafe24.com/SkinImg/img/checkbox_on.svg")
    no-repeat center;
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
