import React from "react";
import RecommendProduct from "./RecommendProduct";
import Newproduct from "./NewProduct";

const Prodcut = () => {
  const pathName = window.location.pathname;
  const recommendProduct = "/recommendproduct";

  return (
    <>
      {pathName === "/recommendproduct" && (
        <RecommendProduct title="추천상품" />
      )}
      {pathName === "/newproduct" && <Newproduct title="신제품" />}
    </>
  );
};

export default Prodcut;
