import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

const AppRouter = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Static pages */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Products */}
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRouter;
