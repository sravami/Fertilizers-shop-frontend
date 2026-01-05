import { Box } from "@mui/material";
import CustomInput from "../ui/CustomInput";

export default function ProductSearch({ search, setSearch }) {
  return (
    <Box sx={{ mb: 2 }}>
      <CustomInput
        label="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
}
