import { useSelector } from "react-redux";
import { RootState } from "../store";
import RecommendProduct from "./RecommendProduct";
import Newproduct from "./NewProduct";

const Prodcut = () => {
  const prodcutType = useSelector(
    ({ product }: RootState) => product.productType
  );

  return (
    <>
      {prodcutType === "추천상품" && <RecommendProduct title="추천상품" />}
      {prodcutType === "신제품" && <Newproduct title="신제품" />}
    </>
  );
};

export default Prodcut;
