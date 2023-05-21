import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Main from "../Main/Main";
import Product from "../Product/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
