import { Box, Container } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth="lg">
          {children} {/* Your ProductPage will render here */}
        </Container>
      </Box>
    </Box>
  );
}
