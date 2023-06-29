import React, { useEffect, useState } from "react";
import { productId } from "../api/Prodcut";
import { useParams } from "react-router-dom";
import DetailLayOut from "./DetailLayOut";
import DetailContentLayOut from "./DetailContent/DetailContentLayOut";
import DetailAreaLayOut from "./DetailAreaLayOut/DetailAreaLayOut";
import { ProductType } from "../types/type";

interface TitleProps {
  title: string;
}

const RecommendDetail = ({ title }: TitleProps) => {
  const [detailData, setDetailData] = useState<ProductType>();
  const { pageId } = useParams();

  useEffect(() => {
    productId(pageId).then(({ recommendProducts }) => {
      setDetailData(recommendProducts);
      console.log(detailData);
    });
  }, []);
  return (
    <DetailLayOut title={title}>
      <DetailAreaLayOut
        _id={detailData?._id}
        src={detailData?.src}
        name={detailData?.name}
        price={detailData?.price}
      ></DetailAreaLayOut>
      <DetailContentLayOut src={detailData?.src}></DetailContentLayOut>
    </DetailLayOut>
  );
};

export default RecommendDetail;
