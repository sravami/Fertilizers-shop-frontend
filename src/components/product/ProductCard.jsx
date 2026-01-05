import { Card, CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import CustomButton from "../ui/CustomButton";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 450, margin: "0 auto", boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="300" // bigger image
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ₹ {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <CustomButton onClick={() => navigate(`/product/${product.id}`)}>
          View Details
        </CustomButton>
      </CardActions>
    </Card>
  );
}
