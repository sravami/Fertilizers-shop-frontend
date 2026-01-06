import { Box, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          py: 12,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Welcome to Fertilizer Shop
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Quality fertilizers to help your crops grow better.
        </Typography>

        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ mt: 3 }}
        >
          View Products
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;
