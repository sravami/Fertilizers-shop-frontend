import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import HeroBanner from "../components/common/HeroBanner";


const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroBanner/>

      {/* About Section */}
      <Box sx={{ p: 6 }}>
        <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" color="#2e7d32">
            About Us
          </Typography>

          <Typography
            variant="body1"
            sx={{ mt: 2, fontSize: "1.15rem", lineHeight: 1.8 }}
          >
            We provide high-quality fertilizers, pesticides, seeds, and farming
            equipment. Our mission is to support farmers with trusted and
            affordable products that improve crop yield and soil health.
          </Typography>
        </Box>
      </Box>

      {/* Products Section */}
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="#2e7d32"
          textAlign="center"
        >
          Our Products
        </Typography>

        <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          {[
            {
              title: "Organic Fertilizer",
              desc: "Improves soil health and boosts plant growth naturally.",
            },
            {
              title: "Urea Fertilizer",
              desc: "High-quality nitrogen fertilizer for better crop yield.",
            },
            {
              title: "Pesticides",
              desc: "Protect your crops from harmful insects and pests.",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 2,
                  textAlign: "center",
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
