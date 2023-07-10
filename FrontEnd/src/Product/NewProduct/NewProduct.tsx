import { useEffect, useState, useCallback } from "react";
import ProdcutLayOut from "../ProductLayOut";
import ProductListHeader from "./ProductListHeader";
import ProductList from "./ProductList";
import ProductListNumber from "./ProductListNumber";
import { newProduct } from "../../api/Prodcut";
import { useNavigate, useLocation } from "react-router-dom";
import { ProductType } from "../../types/type";

interface TitleProps {
  title: string;
}

const Newproduct = ({ title }: TitleProps) => {
  const [newData, setNewData] = useState<ProductType[]>([]);
  const [totalData, setTotalData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [querySort, setQuerySort] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const urlSearchParam = new URLSearchParams(location.search);

  const currentPageString = urlSearchParam.get("page");
  let currentPageNumber = Number(currentPageString);

  const newProductAxios = useCallback(async () => {
    const data = await newProduct(location.search);
    return data;
  }, [location]);

  useEffect(() => {
    newProductAxios().then((data) => {
      setNewData(data.newProducts);
      setTotalData(data.count);
      setTotalPage(data.totalPages);
    });
  }, [newProductAxios]);

  const queryNavigate = (pageNumber: number) => {
    const page = pageNumber;
    navigate(`/product?page=${page}&limit=16&sort=${querySort}`);
    window.scrollTo(0, 0);
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuerySort(e.currentTarget.value);
    navigate(`/product?page=1&limit=16&sort=${e.currentTarget.value}`);
  };

  const totalPageNumber = Array(totalPage)
    .fill(1)
    .map((n, idx) => n + idx);

  return (
    <ProdcutLayOut title={title}>
      <ProductListHeader
        totalData={totalData}
        querySort={querySort}
        onChangeSelect={onChangeSelect}
      />
      <ProductList newData={newData} />
      <ProductListNumber
        totalPageNumber={totalPageNumber}
        queryNavigate={queryNavigate}
        currentPageNumber={currentPageNumber}
      />
    </ProdcutLayOut>
  );
};

export default Newproduct;
