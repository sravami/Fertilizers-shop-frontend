import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../services/productService";
import { Box, Card, CardMedia, CardContent, Typography, CircularProgress } from "@mui/material";
import CustomButton from "../components/ui/CustomButton";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  if (loading) return <Box sx={{ p: 4, textAlign: "center" }}><CircularProgress /></Box>;
  if (error) return <Box sx={{ p: 4 }}><Typography color="error">{error}</Typography></Box>;

  return (
    <Box sx={{ p: 4 }}>
      <CustomButton onClick={() => navigate(-1)} sx={{ mb: 2 }}>Back</CustomButton>

      <Card sx={{ display: "flex", gap: 2, p: 2 }}>
        <CardMedia component="img" sx={{ width: 360 }} image={product.image} alt={product.name} />
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>₹ {product.price}</Typography>
          <Typography sx={{ mt: 2 }}>{product.description}</Typography>
          <Typography sx={{ mt: 2 }}>Category: {product.category}</Typography>
          <Typography sx={{ mt: 1 }}>Stock: {product.inStock ? "In Stock" : "Out of Stock"}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
