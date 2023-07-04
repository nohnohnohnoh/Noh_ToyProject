import { useSelector } from "react-redux";
import { RootState } from "../store";
import RecommendDetail from "./RecommendDetail";
import NewDetail from "./NewDetail";

const Detail = () => {
  const detailType = useSelector(
    ({ product }: RootState) => product.productType
  );

  return (
    <>
      {(detailType === "추천상품" || detailType === "상품검색") && (
        <RecommendDetail title="추천상품" />
      )}
      {detailType === "신제품" && <NewDetail title="신제품" />}
    </>
  );
};

export default Detail;
