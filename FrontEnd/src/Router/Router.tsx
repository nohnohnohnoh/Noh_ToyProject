import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import Main from "../Main/Main";
import AuthLogin from "../Auth/Login";
import AuthCreate from "../Auth/Create";
import Newproduct from "../Product/NewProduct";
import RecommendProduct from "../Product/RecommendProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/create" element={<AuthCreate />} />
        <Route path="/newproduct" element={<Newproduct title="신제품" />} />
        <Route
          path="/recommendproduct"
          element={<RecommendProduct title="추천상품" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
