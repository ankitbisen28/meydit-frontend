import React, { useContext } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

export const Register = () => {
  
  const navigate = useNavigate();

  const { register, setEmail, setPassword, password, email, confirmPassword, setConfirmPassword } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    register();
  };

  return (
    <Box width="100%" height="100vh" display="flex" justifyContent="center">
      <Box
        width="300px"
        height="400px"
        sx={{
          border: "2px solid gray",
          marginTop: "5rem",
          borderRadius: "10px",
        }}
      >
        <Typography
          color="secondary"
          textAlign="center"
          fontWeight="bold"
          variant="h5"
          sx={{ marginTop: "2rem" }}
        >
          Register
        </Typography>
        <Box
          width="250px"
          height="300px"
          display="flex"
          flexDirection="column"
          alignContent="center"
          margin="auto"
        >
          <TextField
            sx={{ marginTop: "2rem" }}
            label="username"
            variant="outlined"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            label="password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            label="confirm password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ marginTop: "1rem" }}
          >
            Make a Account
          </Button>
          <Button variant="text" onClick={() => navigate("/login")}>
            Alredy have a Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
