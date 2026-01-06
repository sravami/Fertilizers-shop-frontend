import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Navbar = () => {
 const menuItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Buy Now", path: "/buy" },

    // 👈 ADD THIS LINEc
];


  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1b5e20", paddingY: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            letterSpacing: 1,
          }}
        >
          Fertilizer Shop
        </Typography>

        {/* Menu Items */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              component={Link}      // 👈 makes button a router link
              to={item.path}        // 👈 route path
              sx={{
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                "&:hover": { color: "#ffeb3b" },
                textTransform: "none",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
