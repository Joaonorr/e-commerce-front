import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound/index.tsx";
import Product from "./pages/Product/index.tsx";
import Shop from "./pages/Shop/index.tsx";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
