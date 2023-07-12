import { useState } from "react";
import { deleteWishListProduct } from "../api/WishList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface WishListProps {
  totalPageNumber: number[];
  queryNavigate: (pageNumber: number) => void;
  currentPageNumber: number;
}

const WishListButtonBox = ({
  totalPageNumber,
  queryNavigate,
  currentPageNumber,
}: WishListProps) => {
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const entireDelete = (type: string) => {
    setType(type);
    console.log(type);
    if (window.confirm("전체 삭제하시겠습니까 ?") === true) {
      deleteWishListProduct("", type);
      alert("삭제가 완료되었습니다.");
      navigate("/wishlist?page=1&limit=4");
    } else return;
  };

  const selectDelete = (type: string) => {
    if (window.confirm("선택하신 상품을 삭제하시겠습니까 ?") === true) {
      deleteWishListProduct("", type);
      alert("삭제가 완료되었습니다.");
      navigate("/wishlist?page=1&limit=4");
    } else return;
  };
  return (
    <ButtonComponent>
      <section className="section">
        <NumberBox>
          {totalPageNumber.map((pageNumber, index) => {
            if (currentPageNumber === pageNumber) {
              return (
                <OnNumber onClick={() => queryNavigate(pageNumber)} key={index}>
                  {pageNumber}
                </OnNumber>
              );
            } else {
              return (
                <Number onClick={() => queryNavigate(pageNumber)} key={index}>
                  {pageNumber}
                </Number>
              );
            }
          })}
        </NumberBox>
        <DeleteBox>
          <EntireButton onClick={() => entireDelete("전체삭제")}>
            전체삭제
          </EntireButton>
          <SelectButton onClick={() => selectDelete("선택삭제")}>
            선택삭제
          </SelectButton>
        </DeleteBox>
      </section>
    </ButtonComponent>
  );
};

const ButtonComponent = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  .section {
    position: relative;
    max-width: 1080px;
    width: 92%;
    margin: 20px 0 5%;
    text-align: center;
  }
`;

const NumberBox = styled.div`
  ${({ theme }) => theme.flexMixIn("center", "center")};
  margin-top: 7%;
  text-align: center;
`;

const Number = styled.div`
  display: inline-block;
  width: 40px;
  padding: 12px 0;
  font-size: 16px;
  color: #6d6d6d;
  border: 1px solid #e5e5e5;
  background: #fff;
  cursor: pointer;
`;

const OnNumber = styled(Number)`
  color: #000;
  border-color: #000;
`;

const DeleteBox = styled.span``;

const EntireButton = styled.button`
  position: absolute;
  top: 0%;
  right: -1%;
  margin: 1% 1%;
  padding: 17px 20px;
  border: 1px solid #d6d6d6;
  outline: none;
  background: #fff;
  color: #000;
  font-size: 14px;
`;

const SelectButton = styled(EntireButton)`
  right: 9%;
`;

export default WishListButtonBox;
