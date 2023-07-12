import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import WishListHeader from "./WishListHeader";
import WishListSection from "./WishListSection";
import WishListButtonBox from "./WishListButtonBox";
import { useLocation, useNavigate } from "react-router-dom";
import { WishListProductType } from "../types/type";
import { getWishListProduct } from "../api/WishList";

const WishList = () => {
  const [wishListData, setWishListData] = useState<WishListProductType[]>([]);
  const [totalPage, setTotalPage] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const urlSearchParam = new URLSearchParams(location.search);

  const currentPageString = urlSearchParam.get("page");
  let currentPageNumber = Number(currentPageString);

  const navigateMain = () => {
    navigate("/");
  };

  const wishListAxios = useCallback(async () => {
    const data = await getWishListProduct(location.search);
    return data;
  }, [location]);

  useEffect(() => {
    wishListAxios().then((data) => {
      setWishListData(data.wishList);
      setTotalPage(data.totalPages);
    });
  }, [wishListAxios]);

  const queryNavigate = (pageNumber: number) => {
    const page = pageNumber;
    navigate(`/wishlist?page=${page}&limit=4`);
    window.scrollTo(0, 0);
  };

  const totalPageNumber = Array(totalPage)
    .fill(1)
    .map((n, idx) => n + idx);

  return (
    <WishListComponent>
      <WishListHeader navigateMain={navigateMain} />
      <WishListSection wishListData={wishListData} />
      <WishListButtonBox
        totalPageNumber={totalPageNumber}
        queryNavigate={queryNavigate}
        currentPageNumber={currentPageNumber}
      />
    </WishListComponent>
  );
};

const WishListComponent = styled.div`
  width: 100%;
  zoom: 1;
  position: relative;
  margin: 0 auto;
`;

export default WishList;
