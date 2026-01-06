import { Box, Grid, Pagination, CircularProgress, Typography } from "@mui/material";
import ProductCard from "../components/product/ProductCard";
import ProductSearch from "../components/product/ProductSearch";
import ProductFilter from "../components/product/ProductFilter";
import useProducts from "../hooks/useProducts";

export default function ProductPage() {
  const {
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
    setMaxPrice
  } = useProducts({ initialPage: 1, limit: 2 }); // 2 per page

  return (
    <Box sx={{ p: 3 }}>
      {/* Centered heading with color */}
      <Typography 
        variant="h4" 
        sx={{ mb: 3, textAlign: 'center', color: '#2E7D32', fontWeight: 'bold' }}
      >
        Products
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <ProductSearch search={search} setSearch={setSearch} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <ProductFilter
          category={category}
          setCategory={setCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" sx={{ textAlign: 'center' }}>Error: {error}</Typography>
      ) : (
        <>
          <Grid container spacing={5} justifyContent="center">
            {products.map((p) => (
              <Grid item key={p.id} xs={12} sm={6} md={5}>
                <ProductCard product={p} />
              </Grid>
            ))}
          </Grid>

          {totalPages > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={totalPages || 1}
                page={page}
                onChange={(e, value) => setPage(value)}
                color="primary"
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
}
