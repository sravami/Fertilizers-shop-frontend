import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
} from "@mui/material";

const Contact = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#2e7d32"
        textAlign="center"
        gutterBottom
      >
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Details */}
        <Grid item xs={12} md={5}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Phone
              </Typography>
              <Typography variant="body2">+91 8500565546</Typography>

              <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
                WhatsApp
              </Typography>
              <Typography variant="body2">+91 8500565546</Typography>

              <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
                Email
              </Typography>
              <Typography variant="body2">
                fertilizershop@gmail.com
              </Typography>

              <Button
                variant="contained"
                color="success"
                sx={{ mt: 3 }}
                href="https://wa.me/918500565546"
                target="_blank"
                fullWidth
              >
                Chat on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Google Map */}
        <Grid item xs={12} md={7}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Our Location
              </Typography>
              <Box
                component="iframe"
                src="https://www.google.com/maps?q=Andhra%20Pradesh&output=embed"
                width="100%"
                height="300"
                sx={{ border: 0 }}
                loading="lazy"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
