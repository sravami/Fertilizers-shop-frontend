import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";

export default function useProducts({ initialPage = 1, limit = 2 }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const allProducts = await fetchProducts();

        let filtered = [...allProducts];

        if (search) {
          filtered = filtered.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          );
        }

        if (category) {
          filtered = filtered.filter((p) => p.category === category);
        }

        if (maxPrice) {
          filtered = filtered.filter((p) => p.price <= maxPrice);
        }

        // Pagination
        const total = filtered.length;
        const pages = Math.ceil(total / limit);
        setTotalPages(pages);

        const start = (page - 1) * limit;
        const paged = filtered.slice(start, start + limit);

        setProducts(paged);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [page, search, category, maxPrice, limit]);

  return {
    products,
    loading,
    error,
    page,
    setPage,
    totalPages,
    search,
    setSearch,
    category,
    setCategory,
    maxPrice,
    setMaxPrice,
    limit,
  };
}
