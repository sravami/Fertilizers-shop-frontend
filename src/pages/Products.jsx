import { Box, Grid, Pagination, CircularProgress, Typography } from "@mui/material";
import ProductCard from "../components/product/ProductCard";
import ProductSearch from "../components/product/ProductSearch";
import ProductFilter from "../components/product/ProductFilter";
import useProducts from "../hooks/useProducts";

export default function Products() {
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
  } = useProducts({ initialPage: 1, limit: 2 });

  return (
    <Box sx={{ p: 3 }}>
      <Typography 
  variant="h4" 
  sx={{ 
    mb: 3, 
    textAlign: 'center', // centers the text
    color: '#2E7D32',    // change this to any color you like
    fontWeight: 'bold'   // optional: makes the text bold
  }}
>
  Products
</Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {products.map((p) => (
              <Grid item key={p.id} xs={12} >
                <ProductCard product={p} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages || 1}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </Box>
        </>
      )}
    </Box>
  );
}
