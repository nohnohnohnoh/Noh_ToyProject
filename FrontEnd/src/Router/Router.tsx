import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import Search from "../Components/Search/Search";
import Main from "../Main/Main";
import AuthLogin from "../Auth/Login";
import AuthCreate from "../Auth/Create";
import Product from "../Product/Product";
import Detail from "../ProductDetail/Detail";
import MyPage from "../MyPage/MyPage";
import Basket from "../Cart/Cart";
import WishList from "../WishList/WishList";
import ScrollToTop from "../SrcollToTop";
import Aside from "../Components/Aside/Aside";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Search />
      <Aside />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/create" element={<AuthCreate />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:pageId" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/cart" element={<Basket />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
