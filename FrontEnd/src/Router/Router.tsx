import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";
import Main from "../Main/Main";
import Product from "../Product/Product";
import AuthLogin from "../Auth/Login";
import AuthCreate from "../Auth/Create";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/create" element={<AuthCreate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
