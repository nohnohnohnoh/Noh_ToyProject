import { useMemo, useState } from "react";
import CartProduct from "./CartSectionProudct/CartSectionProudct";
import CartTotal from "./CartSectionTotal";
import { deleteCart, patchCartSelect } from "../../api/Cart";
import { postWishListProduct } from "../../api/WishList";
import { postMyOrderProduct } from "../../api/ProductOrder";
import { useNavigate } from "react-router-dom";
import { CartProudctType } from "../../types/type";
import styled from "styled-components";

interface CartProps {
  cartData: CartProudctType[];
  setCartData: (data: CartProudctType[]) => void;
}

const CartSection = ({ cartData, setCartData }: CartProps) => {
  const [selectDataArr, setSelectDataArr] = useState<CartProudctType[]>([]);
  const [totalArr, setTotalArr] = useState<number[]>([]);
  let totalPrice = 0;

  const navigate = useNavigate();

  useMemo(() => {
    if (cartData.length === totalArr.length) return;
    cartData.map(({ price, quantity }) => {
      totalArr.push(price * quantity);
    });
  }, [cartData]);

  useMemo(() => {
    for (let i = 0; i < totalArr.length; i++) {
      totalPrice += totalArr[i];
    }
    return totalPrice;
  }, [cartData]);

  const onClickOneDelete = (_id: string) => {
    if (window.confirm("정말 삭제하시겠습니까?") === true) {
      deleteCart(_id, "");
      window.location.reload();
      alert("삭제가 완료되었습니다.");
    } else return;
  };

  const onClickSelectDelete = () => {
    if (window.confirm("선택하신 상품을 삭제하시겠습니끼 ?") === true) {
      deleteCart("", "?type=선택삭제");
      window.location.reload();
      alert("삭제가 완료되었습니다.");
      window.scrollTo(0, 0);
    } else return;
  };

  const onClickWishList = (
    _id: string,
    src: string,
    name: string,
    price: number
  ) => {
    if (
      window.confirm("이 상품을 나의 위시리스트에 등록하시겠습니까 ?") === true
    ) {
      postWishListProduct({ _id, src, name, price });
      deleteCart(_id, "");
      window.location.reload();
    } else return;
    if (window.confirm("등록하신 상품을 확인하시겠습니까 ?") === true) {
      navigate("/wishlist?page=1&limit=4");
    } else return window.location.reload();
  };

  const onClickOrder = (
    _id: string,
    src: string,
    name: string,
    price: number,
    quantity: number
  ) => {
    if (window.confirm("이 상품을 주문하시겠습니까 ?") === true) {
      postMyOrderProduct("", {
        _id,
        src,
        name,
        price,
        quantity,
        selectData: undefined,
      });
      deleteCart(_id, "");
    } else return;
    if (window.confirm("주문하신 상품을 확인하시겠습니까 ?") === true) {
      navigate("/mypage");
    } else return window.location.reload();
  };

  const handleSingleCheck = (
    checked: any,
    cartData: CartProudctType,
    _id: string
  ) => {
    if (checked) {
      setSelectDataArr((prev: any) => [...prev, cartData]);
      patchCartSelect(_id, true, "").then((data) => {
        setCartData(data.cart);
      });
    } else {
      setSelectDataArr(selectDataArr.filter((el) => el !== cartData));
      patchCartSelect(_id, false, "").then((data) => {
        setCartData(data.cart);
      });
    }
  };

  const handleAllCheck = () => {
    const idArray: CartProudctType[] = [];
    cartData.forEach((el: CartProudctType) => {
      idArray.push(el);
    });
    setSelectDataArr(idArray);
    patchCartSelect("", true, "?type=전체선택").then((data) => {
      setCartData(data.cart);
    });
  };

  return (
    <CartSectionComponents>
      <CartHeader>
        <h3 className="title">장바구니 상품</h3>
      </CartHeader>
      <CartContainer>
        <CartProduct
          cartData={cartData}
          onClickWishList={onClickWishList}
          onClickOrder={onClickOrder}
          onClickOneDelete={onClickOneDelete}
          handleSingleCheck={handleSingleCheck}
        />
        <MediaCartButtonBox>
          <CartEntireButton onClick={handleAllCheck}>전체선택</CartEntireButton>
          <CartSelectDeleteButton onClick={onClickSelectDelete}>
            선택삭제
          </CartSelectDeleteButton>
        </MediaCartButtonBox>
        <CartTotal totalPrice={totalPrice} selectDataArr={selectDataArr} />
      </CartContainer>
      <CartButtonBox>
        <CartEntireButton onClick={handleAllCheck}>전체선택</CartEntireButton>
        <CartSelectDeleteButton onClick={onClickSelectDelete}>
          선택삭제
        </CartSelectDeleteButton>
      </CartButtonBox>
    </CartSectionComponents>
  );
};

const CartSectionComponents = styled.div`
  max-width: 1230px;
  width: 92%;
  margin: 4% auto 0;
  ${({ theme }) => theme.media.desktop`
    margin: 2% auto 0 ;
  `}
`;

const CartHeader = styled.div`
  margin-bottom: 15px;
  .title {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    text-align: left;
  }
  ${({ theme }) => theme.media.desktop`
  margin-bottom: 10px;
  .title {
    font-size: 16px;
  }
  `}
`;

const CartContainer = styled.div`
  border-top: 2px solid #1a1a1a;
  ${({ theme }) => theme.media.desktopHuge`
  display: flex;
  `}
`;

const CartButtonBox = styled.div`
  margin: 20px 0;
  ${({ theme }) => theme.media.desktop`
  display: none;
  `}
`;

const MediaCartButtonBox = styled.div`
  margin: 20px 0;
  ${({ theme }) => theme.media.desktopHuge`
  display: none;
  `}
  ${({ theme }) => theme.media.desktop`
  display: flex;
  `}
`;

const CartEntireButton = styled.button`
  height: 50px;
  padding: 17px 20px;
  border: 1px solid rgb(214, 214, 214);
  outline: none;
  background: rgb(255, 255, 255);
  margin-right: 1%;
  ${({ theme }) => theme.media.desktop`
      flex: 1 1 0%;
      margin: 0 1%;
  `}
`;

const CartSelectDeleteButton = styled(CartEntireButton)``;

export default CartSection;
