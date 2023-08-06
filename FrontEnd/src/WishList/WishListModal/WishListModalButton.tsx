import { postCart } from "../../api/Cart";
import { postMyOrderProduct } from "../../api/ProductOrder";
import { WishListProductType } from "../../types/type";
import styled from "styled-components";

interface WishListModalProp {
  _id: string;
  src: string;
  name: string;
  price: number;
  quantity: number;
  setToggleModal: (toggle: boolean) => void;
  setWishListData: (data: WishListProductType[]) => void;
  setQuantityData: (num: number) => void;
}

const WishListModalButton = ({
  _id,
  src,
  name,
  price,
  quantity,
  setToggleModal,
  setWishListData,
  setQuantityData,
}: WishListModalProp) => {
  const wishListCart = () => {
    if (
      window.confirm("선택하신 상품을 장바구니에 등록하시겠습니까 ?") === true
    ) {
      postCart({
        _id,
        src,
        name,
        price,
        quantity,
      }).then((data) => {
        if (data.message === "장바구니에 등록하였습니다.") {
          setToggleModal(false);
          setWishListData(data.wishList);
          alert(data.message);
          setQuantityData(0);
        } else alert(data.message);
      });
    }
  };

  const wishListOrder = () => {
    if (window.confirm("선택하신 상품을 주문하시겠습니까 ?") === true) {
      postMyOrderProduct("", {
        _id,
        src,
        name,
        price,
        quantity,
        selectData: undefined,
      }).then((data) => {
        if (data.message === "구매가 완료되었습니다.") {
          setToggleModal(false);
          setWishListData(data.wishList);
          alert(data.message);
          setQuantityData(0);
        } else alert(data.message);
      });
    }
  };

  return (
    <>
      <CartButton onClick={wishListCart}>장바구니 담기</CartButton>
      <OrderButton onClick={wishListOrder}>바로구매</OrderButton>
    </>
  );
};

const CartButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 50%;
  padding: 4% 8%;
  border: 1px solid rgb(214, 214, 214);
  outline: none;
  background: rgb(255, 255, 255);
  font-weight: bold;
`;

const OrderButton = styled(CartButton)`
  right: 0;
  border: 1px solid rgb(26, 26, 26);
  background: rgb(26, 26, 26);
  color: rgb(255, 255, 255);
`;

export default WishListModalButton;
