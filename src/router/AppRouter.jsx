import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* Root path shows Products page */}
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
