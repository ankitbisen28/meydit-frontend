import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

export const ClothList = ({ cloth, handleChange }) => {
  return (
    <FormControl fullWidth style={{ margin: "2rem 1rem 0 0" }}>
      <InputLabel id="demo-simple-select-label">ClothList</InputLabel>
      <Select defaultValue = "" name="type_clothing" onChange={handleChange} label="Cloths">
        {cloth.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
