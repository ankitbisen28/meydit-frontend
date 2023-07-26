import React from 'react'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

export const StateList = ({state, handleChange}) => {
  return (
    <FormControl fullWidth style={{ margin: "2rem 1rem 0 0" }}>
          <InputLabel id="demo-simple-select-label">State</InputLabel>
          <Select defaultValue = "" fullWidth name="state" onChange={handleChange} label="State">
            {state.map((item) => {
              return (
                <MenuItem key={item.key} value={item.name}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
  )
}
