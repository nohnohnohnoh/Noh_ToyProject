import React, { useEffect, useRef, useState, useCallback } from "react";
import ProdcutLayOut from "../ProductLayOut";
import ProductList from "./ProudctList";
import ProductListHeader from "./ProductListHeader";
import { recommendProduct } from "../../api/Prodcut";
import { useNavigate, useLocation } from "react-router-dom";
import { ProductType } from "../../types/type";

interface TitleProps {
  title: string;
}

const RecommendProduct = ({ title }: TitleProps) => {
  const [recommendData, setRecommendData] = useState<ProductType[]>([]);
  const [totalData, setTotalData] = useState();
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const page = useRef<number>(1);
  const observerTargetEl = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const urlSearchParam = new URLSearchParams(location.search);
  const currentPageString = urlSearchParam.get("sort");

  const infiniteProduct = useCallback(async () => {
    await recommendProduct(
      `?page=${page.current}&limit=8&sort=${currentPageString}`
    ).then((data) => {
      setRecommendData((prevData) => [...prevData, ...data.recommendProducts]);
      setTotalData(data.count);
      setHasNextPage(data.recommendProducts.length === 8);
      if (data.recommendProducts.length) {
        page.current += 1;
      }
    });
  }, []);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        infiniteProduct();
      }
    });
    io.observe(observerTargetEl.current);

    return () => {
      io.disconnect();
    };
  }, [infiniteProduct, hasNextPage]);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/product?page=1&limit=8&sort=${e.currentTarget.value}`);
    window.location.reload();
  };

  return (
    <>
      <ProdcutLayOut title={title}>
        <ProductListHeader
          totalData={totalData}
          onChangeSelect={onChangeSelect}
          currentPageString={currentPageString}
        />
        <ProductList
          recommendData={recommendData}
          observerTargetEl={observerTargetEl}
        />
      </ProdcutLayOut>
    </>
  );
};

export default RecommendProduct;
