import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setProductType, setToggleSearch } from "../../reducers/productSlice";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { searchProduct } from "../../api/Prodcut";

const Search = () => {
  const [search, setSearch] = useState("");

  const toggleSearch = useSelector(
    ({ product }: RootState) => product.toggleSearch
  );

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    console.log(search);
  };

  const onClickClose = () => {
    dispatch(setToggleSearch({ toggleSearch: false }));
  };

  const onSubmitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setProductType({ productType: "상품검색" }));
    navigate(`product?search=${search}`);
    await searchProduct(`?search=${search}`).then((data) => console.log(data));
    dispatch(setToggleSearch({ toggleSearch: false }));
    setSearch("");
  };
  return (
    <>
      <form onSubmit={onSubmitSearch}>
        <SearchComponent visible={toggleSearch}>
          <SearchTitle>SEARCH</SearchTitle>
          <SearchFieldSet>
            <SearchInput value={search} onChange={onChangeSearch} type="text" />
            <SerchIcon />
          </SearchFieldSet>
          <CloseIcon onClick={onClickClose} />
        </SearchComponent>
      </form>
      <BackGround visible={toggleSearch} />
    </>
  );
};

const SearchComponent = styled.div<{ visible: boolean }>`
  z-index: 1001;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #fff;
  height: 389px;
  opacity: 0;
  visibility: hidden;
  transform: translate3d(0, -100%, 0);
  transition: opacity 0.5s ease, transform 0.5s ease, visibility 0s linear 0.5s;
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
      transition: opacity 0.5s ease, transform 0.5s ease,
        visibility 0s linear 0s;
      transform: translateZ(0);
    `}
`;

const SearchTitle = styled.div`
  font-weight: 700;
  color: #3a3a3a;
  margin: 103px 0 54px;
  display: block;
  font-size: 30px;
  text-align: center;
`;

const SearchFieldSet = styled.fieldset`
  display: flex;
  width: 650px;
  margin: 0 auto;
  border-bottom: 1px solid #000;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 54px;
  padding: 15px 0;
  flex: 1;
  font-size: 18px;
  box-sizing: border-box;
  border: 0;
  background: #fff;
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

const SerchIcon = styled(BsSearch)`
  width: 28px;
  height: 28px;
  margin: 15px 0 0;
  cursor: pointer;
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 35px;
  right: 50px;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

export default Search;
