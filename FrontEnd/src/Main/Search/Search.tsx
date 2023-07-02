import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Search = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    console.log(search);
  };

  return (
    <>
      <form>
        <SearchComponent>
          <SearchTitle>SEARCH</SearchTitle>
          <SearchFieldSet>
            <SearchInput onChange={onChangeSearch} type="text" />
            <SerchIcon />
          </SearchFieldSet>
          <CloseIcon />
        </SearchComponent>
      </form>
      <BackGround />
    </>
  );
};

const SearchComponent = styled.div`
  z-index: 1001;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #fff;
  height: 389px;
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

const BackGround = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const SerchIcon = styled(BsSearch)`
  width: 28px;
  height: 28px;
  margin: 15px 0 0;
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 35px;
  right: 50px;
  width: 35px;
  height: 35px;
`;

export default Search;
