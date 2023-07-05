import { Box, Typography, TextField } from "@mui/material";
import React from "react";

export const UserDetail = () => {
  return (
    <Box mt={15} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography fontSize={30}>
        Please Fill Your Details
      </Typography>
      <TextField label="Outlined" variant="outlined" color="primary" />
    </Box>
  );
};
