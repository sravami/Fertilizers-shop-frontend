import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2e7d32",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: "auto",
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Fertilizer Shop. All rights reserved.
      </Typography>
    </Box>
  );
}
