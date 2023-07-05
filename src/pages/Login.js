import React, { useContext } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

export const Login = () => {
  const { login, setEmail, setPassword, password, email } =  useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
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
          sx={{ marginTop: "4rem" }}
        >
          Login
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
            sx={{ marginTop: "3rem" }}
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
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ marginTop: "1rem" }}
          >
            Login
          </Button>
          <Button variant="text" onClick={() => navigate("/register")}>
            Don't have Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
