import { useSelector } from "react-redux";
import { RootState } from "../store";
import RecommendProduct from "./RecommendProduct";
import Newproduct from "./NewProduct/NewProduct";
import SearchProduct from "./Search/SearchProduct";

const Prodcut = () => {
  const prodcutType = useSelector(
    ({ product }: RootState) => product.productType
  );

  return (
    <>
      {prodcutType === "추천상품" && <RecommendProduct title="추천상품" />}
      {prodcutType === "신제품" && <Newproduct title="신제품" />}
      {prodcutType === "상품검색" && <SearchProduct title="상품검색" />}
    </>
  );
};

export default Prodcut;
