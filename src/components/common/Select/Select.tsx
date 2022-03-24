import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@mui/material";
import { useState } from "react";

export const Select = (props: any) => {
  const { options, title, onChange, name, helperText } = props;
  const [currentOption, setCurrentOption] = useState("");

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <MuiSelect
        labelId=""
        id=""
        name={name}
        value={currentOption}
        label={title}
        onChange={(e: any) => {
          setCurrentOption(e.target.value);
          onChange(e.target.value);
        }}
        {...props}
      >
        {options?.map((option: any, index: any) => (
          <MenuItem
            onClick={(e: any) => {
              setCurrentOption(e.target.value);
            }}
            key={index}
            value={option?.value}
          >
            {option?.label}
          </MenuItem>
        ))}
      </MuiSelect>
      <small>{helperText}</small>
    </FormControl>
  );
};
