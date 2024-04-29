import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header/index.tsx";
import NotFound from "./pages/NotFound/index.tsx";
import Product from "./pages/Product/index.tsx";
import Shop from "./pages/Shop/index.tsx";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/category/:id" element={<Shop />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
