import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import Main from "../Main/Main";
import AuthLogin from "../Auth/Login";
import AuthCreate from "../Auth/Create";
import Product from "../Product/Product";
import Detail from "../ProductDetail/Detail";
import Search from "../Components/Search/Search";
import ScrollToTop from "../SrcollToTop";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Search />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/create" element={<AuthCreate />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:pageId" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
