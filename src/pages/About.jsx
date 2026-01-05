import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const About = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#2e7d32"
        textAlign="center"
        gutterBottom
      >
        About Us
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        sx={{ maxWidth: 900, mx: "auto", mb: 5, lineHeight: 1.8 }}
      >
        We are a trusted fertilizer shop committed to supporting farmers with
        high-quality agricultural products and expert guidance.
      </Typography>

      <Grid container spacing={4}>
        {/* Shop History */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Shop History
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Our shop was established to provide reliable fertilizers,
                seeds, and pesticides to farmers. Over the years, we have
                earned trust through quality products and honest service.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Location */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Location
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Located in the heart of the farming community, our shop is
                easily accessible to farmers from nearby villages and towns.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Experience */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Experience
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                With many years of experience in agriculture supplies, we
                understand soil health, crop nutrition, and seasonal farming
                needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Helping Farmers */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                How We Help Farmers
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                We guide farmers in choosing the right fertilizers, provide
                affordable pricing, and support sustainable farming practices
                to improve crop yield.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
