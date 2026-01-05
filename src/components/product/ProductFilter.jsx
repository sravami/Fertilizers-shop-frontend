import { Box, Typography, Slider } from "@mui/material";

export default function ProductFilter({ maxPrice, setMaxPrice }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ width: 240 }}>
        <Typography variant="body2">Max Price: ₹{maxPrice || "No Limit"}</Typography>
        <Slider
          value={maxPrice || 0}
          min={0}
          max={5000}
          step={50}
          onChange={(e, v) => setMaxPrice(v === 0 ? undefined : v)}
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
}
