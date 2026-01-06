import { TextField } from "@mui/material";

export default function CustomInput({ label, value, onChange, ...props }) {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
