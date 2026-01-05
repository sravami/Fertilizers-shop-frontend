import { Button } from "@mui/material";

export default function CustomButton({ children, ...props }) {
  return (
    <Button variant="contained" {...props}>
      {children}
    </Button>
  );
}
