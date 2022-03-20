import { TextField } from "@mui/material";

type Props = {
  label?: string;
};

export const TextInput = () => {
  return <TextField label="Email Address" type="password" variant="outlined" />;
};
